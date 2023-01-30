/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

// getWeatherData Function
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //Use template literals to create the url with the input (city) and the API key
  const BASE_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  // Weather Response Promise
  const weatherPromise  = fetch(BASE_URL);
  //Return the weather response promise
  return weatherPromise.then((response) => {
    return response.json();
  })

}
// Search City Function
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  // Asynchronous code - First get the weather data with "await"
  const data = await getWeatherData(city)
  // Then show the weather data
  showWeatherData(data)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //Eg. console.log(weatherData, '🍪') - console.log(weatherData.main.temp)
  // How to get access to the data in the Api - You ca use data[0].main.temp
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max

}

