import React, { useContext } from "react";
import { SimulatorContext } from "../context/SimulatiorContext";
import "./styles/choose_minutes.css";

function ChooseMinutes() {
    const { minutes } = useContext(SimulatorContext);
    
  return (
    <div className="choose-minutes">
        <input type="number" value={minutes.value} onChange={(e) => minutes.set(e.target.value)} />
    </div>
  );
}

export default ChooseMinutes;
