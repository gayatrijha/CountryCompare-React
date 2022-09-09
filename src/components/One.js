import React from "react";
import { useState } from "react";
const One = (props) => {
  let { countryArr } = props;

  const [flag1, setFlag1] = useState();
  const [offical1, setOffical1] = useState();
  const [population1, setPopulation1] = useState();
  const [capital, setCapital] = useState();

  let countryData;
  const handleChange = (event) => {
    let selectedValue = event.target.value;

    countryData = countryArr.find(
      (country) => selectedValue === country.name.common
    );
    console.log(countryData.name.official);
    setFlag1(countryData.flags.png);
    setOffical1(countryData.name.official);
    setPopulation1(countryData.population);
    setCapital(countryData.capital);
  };

  const inputElement = countryArr.map((element) => (
    <option value={element.name.common} textcontent={element.name.common}>
      {element.name.common}
    </option>
  ));
  return (
    <>
      <div className="contanierdrop text-center">
        <form className="text-center">
          <div className="row ">
            <div className="col-lg-12">
              <div style={{ width: "80%", marginLeft: "70px" }}>
                <input
                  placeholder="Select country"
                  list="firstCountry"
                  className="input"
                  id="c1"
                  onChange={handleChange}
                  name="c1"
                />
                <datalist id="firstCountry">{inputElement}</datalist>
              </div>

              <div className="containerdetail text-center">
                <p>{offical1}</p>
                <img src={flag1} alt="" className="flagimage" />
                {population1 && (
                  <p className="population">Total Population : {population1}</p>
                )}
                {capital && <p>Capital : {capital} </p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default One;
