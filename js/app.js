
function getWeather() {
    // Get the user's input (e.g., city or ZIP code)
    const inputLocation = document.getElementById("location").value;
    
   const location = `${inputLocation} == null? "Colombo" : ${inputLocation}`;

    // API key
   const apiKey = "bfbf2b8896d94de188590948230110"; 

    // The API URL with the location and API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
   

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
            //const humidity = data.current.humidity;

            console.log(temperature)
            console.log(data)
            
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
