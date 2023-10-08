// https://api.openweathermap.org/data/2.5/weather?q=London&appid=fef3e9decebbaee5516f7f3eb960f2e1&
// 631bff34fcdc9287888211a48920588e

const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apikey = '631bff34fcdc9287888211a48920588e'
var temp = document.querySelector('.temp');
var icon = document.querySelector('.icon');
var city = document.querySelector('.city');
var ws = document.querySelector('.ws');
var humid = document.querySelector('.humid');

var input = document.querySelector('.search input'); 
var btn = document.querySelector('.search button');
const wth = document.querySelector('.weather');
var srch = '';
var x=0;

async function getWeather() {
if(input.value == srch){

}
else{
    if(x!=0){
        wth.style.animation = 'hide 0.5s ease-in-out forwards';
    }
    const response = await fetch(apiurl + input.value + '&appid=' + apikey);
    const data = await response.json();
    console.log(apiurl + input.value + '&appid=' + apikey);
    console.log(data);
    if(data.cod == '404'){
        alert('City not found');
        x=0;
        return;
    }
    else{
        temp.innerHTML = data.main.temp + '°C';
        city.innerHTML = data.name;
        ws.innerHTML = data.wind.speed + 'm/s';
        humid.innerHTML = data.main.humidity + '%';

        var weather = data.weather[0].main;
        if(weather = 'Clouds') {
            icon.src = 'images/clouds.png';
        }
        else if(weather = 'Rain') {
            icon.src = 'images/rain.png';
        }
        else if(weather = 'Clear') {
            icon.src = 'images/clear.png';
        }
        else if(weather = 'Snow') {
            icon.src = 'images/snow.png';
        }
        else if(weather = 'Drizzle') {
            icon.src = 'images/drizzle.png';
        }
        else if(weather = 'Mist') {
            icon.src = 'images/mist.png';
        }
        wth.style.display = 'block';
        wth.style.animation = 'show 1s ease-in-out forwards';
        x=x+1;
    }
}
}



btn.addEventListener('click', getWeather);
input.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
}   );
