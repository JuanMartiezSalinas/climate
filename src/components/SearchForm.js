/** @format */

import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setEntrada, fetchCity } = useGlobalContext();
  const searchValue = React.useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCity = () => {
    setEntrada(searchValue.current.value);
  };

  const handleClick = (e) => {
    fetchCity();
    setEntrada("");
  };
  // React.useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-field">
        <input
          type="text"
          id="cityName"
          ref={searchValue}
          onChange={searchCity}
          required
        />
        <label for="cityName" className="label">
          City
        </label>
        <button className="btn" type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
