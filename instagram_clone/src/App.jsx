import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TopBody from "./components/topBody/TopBody";
import Circle from "./components/topBody/Circle";
import MainBody from "./components/mainBody/MainBody";

var result = Object;
var HightlighResult = Object;
var postResult = Object;
var highlightsPicUrls = [];
const instagramUserName = "nerdzfactory_co";

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

try {
    const response = await fetch(url, options);
    const response2 = await fetch(highlightUrl, options);
    const response3 = await fetch(postUrl, options);
    result = await response.json();
    HightlighResult = await response2.json();
    postResult = await response3.json();

    for (let highlightId of HightlighResult.data.items) {
        highlightId = highlightId.id.split(":")[1];

        let highlightsIdUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info?highlight_id=${highlightId}&url_embed_safe=true`;
        let tempResponse = await fetch(highlightsIdUrl, options);
        let highlightsPicResult = await tempResponse.json();
        highlightsPicUrls.push(highlightsPicResult.data.additional_data.cover_media.cropped_image_version.url);
    }
    // console.log(HightlighResult.data.items);
} catch (error) {
    console.error(error);
}

function App() {
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
