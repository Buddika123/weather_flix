 // API key
const apiKey = "bfbf2b8896d94de188590948230110"; 

 // Get the user's input (e.g., city or ZIP code)
 const inputLocation = document.getElementById("cityname").value;
    
 //const location = `${inputLocation} == null? "Colombo" : ${inputLocation}`;
 const locationInput = `${inputLocation} == null ? "Colombo" : ${inputLocation}`;


function getWeather() {   
    // The API URL with the location and API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}&aqi=no`;

   

    // Make the API request using fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                document.getElementById("weatherInfo").innerHTML = "Loding...";
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Access the weather information from the parsed JSON
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            
            // Update the HTML to display the weather information
          
              const city = `<h1> ${data.location.name}</h1>
                            <img src=\"${data.current.condition.icon}\"  width=\"200px\" height=\"150px\">
                            <p>${data.current.condition.text}</p>`;
             
              const temp = `<h1> Temperature</h1>
                            <p>${temperature}°C</>`
              const humidity = `<h1> Humidity</h1>
                            <p>${data.current.humidity}%</>`

              const cloud =  `<h1> Cloud</h1>
                        <p>${data.current.cloud}%</>`

              const wind =  `<h1> Wind</h1>
                            <p>${data.current.wind_kph}kmPH/>`
          
          

            const localTime = `<h1>${data.location.localtime}</h1>`
            
             document.getElementById("city").innerHTML = city;
             document.getElementById("temp").innerHTML = temp;
             document.getElementById("hum").innerHTML = humidity;
             document.getElementById("cloud").innerHTML = cloud;
             document.getElementById("wind").innerHTML = wind;
             document.getElementById("banner").innerHTML = localTime;
        })
        .catch(error => {
            console.error("There was an error fetching weather data:", error);
          //  document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
        });
}

function forecastWeather(days) {
    console.log(123)

    // The API URL with the location and API key
   // const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
   // const apiUrl =  ` http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputLocation}&days=2&aqi=no&alerts=no`
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationInput}&days=${days}&aqi=no&alerts=no`

   fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Access the weather information from the parsed JSON    
        console.log(111,data)
        const forecastDays = data.forecast.forecastday;

        const forecastList = document.getElementById("forecastList"); // Get the <ul> element

        // Clear any existing content in the forecast list
        forecastList.innerHTML = '';

        console.log(222,forecastDays)
        forecastDays.forEach(day => {
            const date = day.date;
            const temperature = day.day.avgtemp_c;
            const windSpeed = day.day.maxwind_kph;
            const humidity = day.day.avghumidity;
            const src = day.day.condition.icon
            const condition = day.day.condition.text
    
            // Create an <li> element for each day's forecast data
            const listItem = document.createElement("li");
            listItem.classList.add("card");
            listItem.innerHTML = `
                <h3>${date}</h3>
                <img src=\"${src}\"  width=\"200px\" height=\"150px\">
                <p>Temp: ${temperature}°C</p>
               
                <p>${condition}</p>
            `
    
            // Append the <li> element to the <ul> element
            forecastList.appendChild(listItem);
        });
        
      
    })
    .catch(error => {
        console.error("There was an error fetching weather data:", error);
      //  document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
    });
} 



// .then(data => {
//     // Access the forecast information from the parsed JSON
//     const forecastDays = data.forecast.forecastday;
    
//     // Loop through the forecast days and display each day's information
//     forecastDays.forEach(day => {
//         const date = day.date;
//         const temperature = day.day.avgtemp_c;
//         const condition = day.day.condition.text;

//         // Create HTML elements to display the forecast data for each day
//         const forecastInfo = `
//             <div class="forecast-day">
//                 <h2>${date}</h2>
//                 <p>Temperature: ${temperature}°C</p>
//                 <p>Condition: ${condition}</p>
//             </div>
//         `;

//         // Append the forecast information to a container div
//         document.getElementById("forecastContainer").innerHTML += forecastInfo;
//     });
// })
