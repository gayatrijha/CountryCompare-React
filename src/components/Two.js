import React from 'react'
import { useState} from "react";
const Two = (props) => {

  let{countryArr} = props

  const [flag1, setFlag1] = useState();
  const [offical1, setOffical1] = useState();
  const [capital, setCapital] = useState();
  const [population1, setPopulation1] = useState();

  const [flag2, setFlag2] = useState();
  const [offical2, setOffical2] = useState();
  const [population2, setPopulation2] = useState();
  const [capital2, setCapital2] = useState();

  let countryData;
  const handleChange = (event) => {
    let selectedValue = event.target.value;

    countryData = countryArr.find((country) => selectedValue === country.name.common);
    console.log(countryData.name.official);
    setFlag1(countryData.flags.png);
    setOffical1(countryData.name.official);
    setPopulation1(countryData.population);
    setCapital(countryData.capital);
  };

  const handleChange2 = (event) => {
    let selectedValue = event.target.value;

    countryData = countryArr.find((country) => selectedValue === country.name.common);
    setFlag2(countryData.flags.png);
    setOffical2(countryData.name.official);
    setPopulation2(countryData.population);
    setCapital2(countryData.capital);
  };
  const inputElement = countryArr.map((element) => (
    <option value={element.name.common} textcontent={element.name.common}>
      {element.name.common}
    </option>
  ));
  return (
  
    <>
      <div className="contanierdrop">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div>
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
            <div className="col-md-6">
            <div>
                <input
                  placeholder="Select country"
                  list="secondCountry"
                  className="input"
                  id="c2"
                  onChange={handleChange2}
                  name="c2"
                  
                />
                <datalist id="secondCountry">{inputElement}</datalist>
              </div>
              <div className="containerdetail text-center">
                <p>{offical2}</p>
                <img src={flag2} alt="" className="flagimage text-center" />
                {population2 && (
                  <p className="population">Total Population : {population2}</p>
                )}
                {capital2 && <p>Capital : {capital2} </p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Two
