import React from "react";

const Input = (props) => {
  let { countryArr } = props;
  return (
    <div>
      <datalist id="browsers">
        {countryArr.map((element) => {
          // return <option value={element.name.common} />;
          return <input value={element.name.common}>{element.name.common}</input>
        })}
      </datalist>
    </div>
  );
};

export default Input;
