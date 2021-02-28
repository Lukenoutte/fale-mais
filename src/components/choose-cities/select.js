import React, { useEffect, useRef, useContext } from "react";
import "./styles/select.css";
import { SimulationContext } from "../../context/SimulationContext";

function Select(props) {
  const { myOptions, value, handleSelect, label } = props;
  const selectRef = useRef("");
  const { origin, destination } = useContext(SimulationContext);

  useEffect(() => {
    if (destination !== selectRef.current.value)
      destination.set(selectRef.current.value);
  }, [origin, destination]);

  return (
    <div className="select-component">
      <p>{label}</p>
      <select
        ref={selectRef}
        style={{ fontFamily: "Poppins" }}
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {myOptions.map((myOption) => {
          return (
            <option key={myOption} value={myOption}>
              {myOption}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
