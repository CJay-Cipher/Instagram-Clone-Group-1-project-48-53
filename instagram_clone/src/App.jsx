import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TopBody from "./components/topBody/TopBody";
import Circle from "./components/topBody/Circle";
import MainBody from "./components/mainBody/MainBody";

const instagramUserName = "nerdzfactory_co"; // Change this Instagram username to get different profile content

const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${instagramUserName}&url_embed_safe=true`;
const highlightUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/highlights?username_or_id_or_url=${instagramUserName}&url_embed_safe=true`;
const postUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${instagramUserName}&url_embed_safe=true`;

const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "b0616dba4cmsh109303e3d75ed18p1442dcjsnd54b926455fb",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
};

function App() {
    const [result, setResult] = useState({});
    const [HightlighResult, setHighlightResult] = useState({});
    const [postResult, setPostResult] = useState({});
    const [highlightsPicUrls, setHighlightsPicUrls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const response2 = await fetch(highlightUrl, options);
                const response3 = await fetch(postUrl, options);
                const resultData = await response.json();
                const highlightData = await response2.json();
                const postData = await response3.json();

                setResult(resultData);
                setHighlightResult(highlightData);
                setPostResult(postData);

                const tempHighlightsPicUrls = [];
                for (let highlightId of highlightData.data.items) {
                    const id = highlightId.id.split(":")[1];
                    const highlightsIdUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info?highlight_id=${id}&url_embed_safe=true`;
                    const tempResponse = await fetch(highlightsIdUrl, options);
                    const highlightsPicResult = await tempResponse.json();
                    tempHighlightsPicUrls.push(highlightsPicResult.data.additional_data.cover_media.cropped_image_version.url);
                }
                setHighlightsPicUrls(tempHighlightsPicUrls);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false after all fetches are complete
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Fetching Data...</p>
            </div>
        );
    }

    return (
        <>
            <Navbar userResult={result} />
            <TopBody userResult={result} />
            <Circle highlights={HightlighResult} highlightsPicsUrl={highlightsPicUrls} />
            <MainBody userPost={postResult} />
        </>
    );
}

export default App;
