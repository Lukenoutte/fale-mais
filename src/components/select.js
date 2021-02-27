import React from "react";
import "./styles/select.css";

function Select(props) {
  const { myOptions, value, handleSelect, label } = props;

  return (
    <div className="select-component">
      <p>{label}</p>
      <select
        style={{ fontFamily: "Poppins"}}
        value={value}
        onChange={(e) => handleSelect(e)}
      >
        {myOptions.map((myOption) => {
          return (
            <option key={myOption} value={myOption}>
              {" "}
              {myOption}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
