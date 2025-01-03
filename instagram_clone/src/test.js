const url = "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=wizkidayo";
const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "b0616dba4cmsh109303e3d75ed18p1442dcjsnd54b926455fb",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
