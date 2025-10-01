async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apikey= '5fc315ca29de3946665d1a84741adc7c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try{
        const response = await fetch(url);
        const data =await response.json();
        if(data.cod === 200){
            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        } else{
            document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
        } 
    }
    
        catch (error){
            console.error('Error fetchig data: ',error);
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
        }
    
}