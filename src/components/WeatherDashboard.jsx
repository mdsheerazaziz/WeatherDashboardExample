import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import WeatherCard from "./WeatherCard";
import UserInput from "./UserInput";

const WeatherDashboard = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const userCities = window.localStorage.getItem("userCities") || "";
    setCities(userCities.split(",").filter((e) => e));
  }, []);
  const weatherCards = cities.map((city) => {
    return (
      <Col key={city}>
        <WeatherCard city={city} />
      </Col>
    );
  });
  const handleAddCity = (value) => {
    const newCityList = [...cities, value];
    setCities(newCityList);
    window.localStorage.setItem("userCities", newCityList);
  };
  return (
    <div style={{ padding: "20px 20px" }}>
      <UserInput handleAddCity={handleAddCity} />
      <Row>{weatherCards}</Row>
    </div>
  );
};

export default WeatherDashboard;
