import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Two from "./components/Two";
import One from "./components/One";
import Three from "./components/Three";

const App = () => {
  const navigate = useNavigate();

  const navigateToOne = () => {
    navigate("/one");
  };
  const navigateToTwo = () => {
    navigate("/two");
  };
  const navigateToThree = () => {
    navigate("/three");
  };

  const navigateHome = () => {
    navigate("/");
  };
  const [countryArr, setCountry] = useState([]);

  const updateCountry = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    let data = fetch(url);
    let parsedData = await (await data).json();
    setCountry(parsedData);
  };
  useEffect(() => {
    updateCountry();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 onClick={navigateHome} className="heading text-center">
          Compare the number of country you want to compare
        </h2>
        <div className="text-center btncontainer">
          <button className="button btn btn-dark" onClick={navigateToOne}>
            1
          </button>
          <button className="button btn btn-dark" onClick={navigateToTwo}>
            2
          </button>
          <button className="button btn btn-dark" onClick={navigateToThree}>
            3
          </button>
        </div>

        <Routes>
          <Route
            path="/one"
            element={<One countryArr={countryArr} setCountry={setCountry} />}
          />
          <Route
            path="/two"
            element={<Two countryArr={countryArr} setCountry={setCountry} />}
          />
          <Route
            path="/three"
            element={<Three countryArr={countryArr} setCountry={setCountry} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
