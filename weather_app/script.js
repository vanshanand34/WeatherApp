const options = {
	method: 'GET'
};

const circus = (cityName)=>{
        fetch( `https://api.weatherapi.com/v1/current.json?key=9b6367793dd0447eab650453241801&q=${cityName}`, options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            document.getElementById('city').innerHTML = `${response.location.name}`;
            document.getElementById('tempc').innerHTML = `Temperature (in &deg c) : ${response.current.temp_c}`;
            document.getElementById('temp').innerHTML = `<h3>Temperature : ${response.current.temp_c}</h3>`;        
            document.getElementById('tempf').innerHTML = `Temperature (in &deg f) : ${response.current.temp_f}`;
            document.getElementById('humid').innerHTML = `Humidity : ${response.current.humidity}`;
            document.getElementById('feelc').innerHTML = `Feels like (in &deg c) :: ${response.current.feelslike_c}`;
            document.getElementById('feelf').innerHTML = `Feels Like (in &deg f) : ${response.current.feelslike_f}`;
            document.getElementById('text').innerHTML = `<h3 class="text-center"> ${response.current.condition.text}<img src="${response.current.condition.icon}" ></h3>`;
            document.getElementById('windk').innerHTML = `Wind speed(kph) :${response.current.wind_kph}`;        
            document.getElementById('windm').innerHTML = `Wind speed(mph) :${response.current.wind_mph}`;        
            document.getElementById('wind_dir').innerHTML = `Wind Direction :${response.current.wind_dir}`;        
            document.getElementById('name').innerHTML = `Name :${response.location.name}`;        
            document.getElementById('region').innerHTML = `Region :${response.location.region}`;
            document.getElementById('country').innerHTML = `Country :${response.location.country}`;
            document.getElementById('tz_id').innerHTML = `Time Zone :${response.location.tz_id}`;
            document.getElementById('last_updated').innerHTML = `Last Updated :${response.current.last_updated}`;
            console.log(response);
        })
        .catch (error=>{ console.error(error); });
}
mysubmit.addEventListener('click' , (e)=>{
    e.preventDefault();
    circus(search.value);
})
circus("New Delhi");

// import requests
// import json
// import os

// city = input("enter city :")
// url = f"https://api.weatherapi.com/v1/current.json?key=9b6367793dd0447eab650453241801&q={city}"
// obj = requests.get(url)
// dict = json.loads(obj.text)

// temp_c = str(dict["current"]["temp_c"])
// temp_f = dict["current"]["temp_f"]

// #Displaying temperature in Celsius
// print("Temperature (in celsius):")
// print(temp_c)

// #Displaying temperature in fahrenheits
// print("Temperature (in Fahrenheit)")
// print(temp_f)

// print("Last Updated :")
// print(dict["current"]["last_updated"