import React, { useState } from "react";
import axios from "axios";

export default function Info(props) {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [description, setDescription] = useState(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(handleResponse);

    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setDescription(response.data.weather[0].description);
    }

    return (
        <div>
            <h1>{props.city}</h1>
            <ul>
                <li>{temperature}°C</li>
                <li>{description}</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind}km/h</li>
                <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sunny"
                />
            </ul>
        </div>
    );
}