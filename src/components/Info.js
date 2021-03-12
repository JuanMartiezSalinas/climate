/** @format */

import React from "react";
import { useGlobalContext } from "../context";
import { FaThermometerQuarter, FaWind } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { GiBodySwapping } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
const Info = () => {
  const { info, entrada } = useGlobalContext();
  console.log(info);
  return (
    <div className="info">
      <div className="algo">
        <h4>Climate in {info.name}</h4>
        <img
          className="climateImage"
          src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`}></img>
      </div>

      <div className="parameters">
        <p title="Temperature">
          <FaThermometerQuarter className="icon" />
          {info.temp}°C
        </p>
        <p title="Sensation">
          <GiBodySwapping className="icon" />
          {info.sensation}°C
        </p>
        <p title="Maximum temperature">
          <BiUpArrow className="icon" />
          {info.tempMax}°C
        </p>
        <p title="Minimum temperature">
          <BiDownArrow className="icon" />
          {info.tempMin}°C
        </p>
        <p title="Humidity">
          <WiHumidity className="icon" />
          {info.humidity}%
        </p>
        <p title="Wind speed">
          <FaWind className="icon" />
          {info.wind}m/s
        </p>
      </div>
    </div>
  );
};
export default Info;
