const options = {
    method: 'GET'
};
const APPKEY = "9b6367793dd0447eab650453241801"
const url = `https://api.weatherapi.com/v1/current.json?key=${APPKEY}`

const fetchWeatherData = async (cityName) => {
    try {
        const response = await fetch(`${url}&q=${cityName}`, options);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Weather data fetched succesfully, response: ", response, data);
        updateWeatherData(data);
    } catch (e) {
        console.error(error);
    }
}

document.getElementById("submitWeatherData").addEventListener('click', (e) => {
    e.preventDefault();
    const cityName = document.getElementById("search").value
    fetchWeatherData(cityName);
})

fetchWeatherData("New Delhi");

const updateWeatherData = (response) => {
    const { location, current } = response;

    const weatherInfo = {
        city: location.name,
        tempCelsius: current.temp_c,
        tempFahrenheit: current.temp_f,
        humidity: current.humidity,
        feelsLikeCelsius: current.feelslike_c,
        feelsLikeFahrenheit: current.feelslike_f,
        conditionText: current.condition.text,
        conditionIcon: current.condition.icon,
        windKph: current.wind_kph,
        windMph: current.wind_mph,
        windDir: current.wind_dir,
        region: location.region,
        country: location.country,
        timezoneId: location.tz_id,
        lastUpdated: current.last_updated,
    };

    // Updating the HTML elements
    document.getElementById('city').innerHTML = weatherInfo.city;
    document.getElementById('tempc').innerHTML = `Temperature (in &deg;C): ${weatherInfo.tempCelsius}`;
    document.getElementById('temp').innerHTML = `<h3>Temperature: ${weatherInfo.tempCelsius} &deg;C</h3>`;
    document.getElementById('tempf').innerHTML = `Temperature (in &deg;F): ${weatherInfo.tempFahrenheit}`;
    document.getElementById('humid').innerHTML = `Humidity: ${weatherInfo.humidity}%`;
    document.getElementById('feelc').innerHTML = `Feels like (in &deg;C): ${weatherInfo.feelsLikeCelsius}`;
    document.getElementById('feelf').innerHTML = `Feels Like (in &deg;F): ${weatherInfo.feelsLikeFahrenheit}`;
    document.getElementById('text').innerHTML = `<h3 class="text-center">${weatherInfo.conditionText} <img src="https:${weatherInfo.conditionIcon}" alt="Weather icon"></h3>`;
    document.getElementById('windk').innerHTML = `Wind speed (kph): ${weatherInfo.windKph}`;
    document.getElementById('windm').innerHTML = `Wind speed (mph): ${weatherInfo.windMph}`;
    document.getElementById('wind_dir').innerHTML = `Wind Direction: ${weatherInfo.windDir}`;
    document.getElementById('name').innerHTML = `Name: ${weatherInfo.city}`;
    document.getElementById('region').innerHTML = `Region: ${weatherInfo.region}`;
    document.getElementById('country').innerHTML = `Country: ${weatherInfo.country}`;
    document.getElementById('tz_id').innerHTML = `Time Zone: ${weatherInfo.timezoneId}`;
    document.getElementById('last_updated').innerHTML = `Last Updated: ${weatherInfo.lastUpdated}`;
};