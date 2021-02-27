import React, { useContext } from "react";
import { SimulationContext } from "../context/SimulationContext";
import "./styles/choose_minutes.css";

function ChooseMinutes() {
  const { minutes } = useContext(SimulationContext);

  function validateMinutes(e) {
    let inputValue = e.target.value;
    if (inputValue >= 0 && inputValue <= 999999) {
      minutes.set(inputValue);
    }
  }

  return (
    <div className="choose-minutes">
      <p className="question">Em média quanto tempo você passa em chamadas por mês?</p>
      <div className="input-and-p">
        <p>Minutos</p>
        <input
          type="number"
          value={minutes.value}
          placeholder="Ex: 90"
          onChange={(e) => validateMinutes(e)}
        />
      </div>
    </div>
  );
}

export default ChooseMinutes;
