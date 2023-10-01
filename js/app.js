// function getweather(){
//     console.log("clicked")
  
//     //fjghfjg
//     fetch("http://api.weatherapi.com/v1/current.json?key=bfbf2b8896d94de188590948230110&q=colombo&aqi=no", {
//   "method": "GET",
//   "headers": {
//   }
//   })
// .then(response => {
//   console.log(response.body);
// })
// .catch(err => {
//     console.log("There was an error")
//   console.error(err);
// });
// }

function getWeather() {
    // Get the user's input (e.g., city or ZIP code)
    
   const location = document.getElementById("location").value || "Colombo";

    // API key
   const apiKey = "bfbf2b8896d94de188590948230110"; 

    // The API URL with the location and API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
   

    // Make the API request using fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Access the weather information from the parsed JSON
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            const humidity = data.current.humidity;

            console.log(temperature)
            console.log(data.location)
            
            // Update the HTML to display the weather information
            // const weatherInfo = `
              const city = `  <h2>Current Weather in ${data.location.name}</h2>`;
            //     <img src="data.current.condition.icon">
            //     <p> ${temperature}°C</p>
            //     <p> ${condition}</p>
               
            //     <p>Humidity: ${humidity}%</p>
            // `;

            const localTime = `<h1>${data.location.localtime}</h1>`
            
             document.getElementById("city").innerHTML = city;
             document.getElementById("banner").innerHTML = localTime;
        })
        .catch(error => {
            console.error("There was an error fetching weather data:", error);
          //  document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
        });
}
