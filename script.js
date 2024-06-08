// Replace YOUR_API_KEY with your actual OpenWeatherMap API key
const apiKey ='458ae1f0d4958660cc358779fc709424';

// Get the necessary HTML elements
const cityInput = document.getElementById('city');
const nextButton = document.getElementById('next');
const cityOutput = document.getElementById('cityoutput');
const temperatureOutput = document.getElementById('Temperature');
const descriptionOutput = document.getElementById('Description');

// Add an event listener to the next button
nextButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the city name from the input field
  const cityName = cityInput.value.trim();

  // If the city name is empty, do nothing
  if (cityName === '') {
    return;
  }

  // Fetch the weather data for the given city name
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Update the HTML elements with the weather data
      cityOutput.textContent = data.name;
      temperatureOutput.textContent = `${data.main.temp} °C`;
      descriptionOutput.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
});