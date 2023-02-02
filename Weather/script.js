const temp = document.querySelector('.temp');
console.log(temp)
const weather = document.querySelector('.weather');

const description = document.querySelector('.description');
const name = document.querySelector('h1');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const date = document.querySelector('.date');
const button = document.querySelector('button');
console.log(button)
const search = document.querySelector('.search-bar');
console.log(search);

const getDate = function(){
   const day =  new Date().toDateString();
return day;
}



const apiKeys = 'ffe31be12d722e335f58bfe223670f09';
const fetchWeather = function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffe31be12d722e335f58bfe223670f09`)
        .then(res => res.json())
        .then(data =>{ 
            console.log(data);
            displayResult(data)});
    };

    // fetchWeather('philadelphia');

const displayResult = function(data){
         
    date.innerHTML = getDate();
    name.innerHTML = `Weather in ${data.name}`;
    temp.innerHTML = `${Math.round(data.main['temp'])}°c`;
    description.innerHTML = data.weather[0].description
    humidity.innerHTML = `Humidity:${data.main['humidity']} %`;
    wind.innerHTML = `Wind speed: ${data.wind['speed']} km/h`;
    weather.classList.remove('loading');
};


// search.addEventListener('keyup', function(e){
//     if(e.key===enter){
//         searching();
//     }
// })
const searching = function(){
    return fetchWeather(search.value);
};

search.addEventListener('keyup', function(e){
    if (e.key == 'Enter')
    fetchWeather(search.value);
})

button.addEventListener('click', function(){
    searching();
});
