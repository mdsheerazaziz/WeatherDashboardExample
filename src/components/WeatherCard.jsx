import React, { useState } from "react";
import axios from "axios";
import { Card } from "antd";

import { OPEN_WEATHER_MAP } from "../config";

const axiosInstance = axios.create({
  baseURL: OPEN_WEATHER_MAP.domain,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
const getWeather = async (city) => {
  const weatherData = await axiosInstance.get(
    `weather?q=${city}&appid=${OPEN_WEATHER_MAP.apiKey}&units=metric`
  );
  return weatherData;
};
const WeatherCard = ({ city }) => {
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  getWeather(city)
    .then((res) => {
      const weatherData = res.data;
      setTemp(`${weatherData.main.temp} °C`);
      setHumidity(`${weatherData.main.humidity} %`);
      setWind(`${weatherData.wind.speed} at ${weatherData.wind.deg}`);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  return (
    <div>
      <Card title={city} style={{ width: 300 }}>
        <p>City: {city}</p>
        <p>Temperature: {temp}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind: {wind}</p>
      </Card>
    </div>
  );
};

export default WeatherCard;
