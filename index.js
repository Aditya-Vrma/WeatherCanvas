async function fetchWeatherDetails(){
    let city="goa";
    let lat="15.3333";
    let lon="75.0833";
    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
    try {
        const response= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const data =await response.json();
        console.log("Weather data :" , data);   
    } catch (err) {
        throw console.error("Data not fetched. Please try after some time....");
    }

    //this function is for updating data from api to our U.I.
    renderWeatherInfo(data);

}