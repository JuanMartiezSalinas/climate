/** @format */

import React from "react";
import SearchForm from "./components/SearchForm";
import Info from "./components/Info";
import { useGlobalContext } from "./context";
const App = () => {
  const { info } = useGlobalContext();
  return (
    <section className="container">
      <SearchForm />
      {info.name && <Info />}
    </section>
  );
};
export default App;
