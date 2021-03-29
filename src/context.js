/** @format */

import React, { useState, useContext, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [entrada, setEntrada] = useState("");
  const [info, setInfo] = useState({});
  console.log(entrada);
  const fetchCity = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&units=metric&appid=1df10d250782b75dd84f0a513ff7a3bb`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setInfo({
          name: data.name,
          icon: data.weather[0].icon,
          temp: data.main.temp,
          sensation: data.main.feels_like,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          message: "",
        });
      }
    } catch (error) {
      console.log("there's a fucking error bro");
      alert(
        "City not found, please verify if the cityh name is correct or look for another city"
      );
    }
  }, [entrada]);

  // useEffect(() => {
  //   fetchCity();
  // }, [fetchCity]);
  return (
    <AppContext.Provider value={{ entrada, setEntrada, fetchCity, info }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
