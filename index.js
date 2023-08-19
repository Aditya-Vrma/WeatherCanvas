const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

//initially variable we need 
let oldTab=userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
//one work is pending
userTab.addEventListener("click",()=>{
    //passed clicked tab as input paramter
    switchTab(userTab);
});

function switchTab(newTab){
    if(oldTab!=newTab){
        oldTab.classList.remove("current-tab");
        oldTab=newTab;
        oldTab.classList.add("current-tab")

        if(!searchForm.classList.contains("active")){
            //is serachForm wlla container invisible, if yes make it vissible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active"); 
            //now i have come to yourWeather tab and now we have display default weather also
            getfromSessionStorage();
        }

    }
};

searchTab.addEventListener("click",()=>{
    //passed clicked tab as input paramter
    switchTab(searchTab);
});





 

// async function fetchWeatherDetails(){
//     let city="goa";
//     let lat="15.3333";
//     let lon="75.0833";
//     const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
//     try {
//         const response= await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//           );
//         const data =await response.json();
//         console.log("Weather data :" , data);   
//     } catch (err) {
//         throw console.error("Data not fetched. Please try after some time....");
//     }

//     //this function is for updating data from api to our U.I.
//     renderWeatherInfo(data);

// }