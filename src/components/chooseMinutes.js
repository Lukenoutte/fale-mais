import React, { useContext } from "react";
import { SimulatorContext } from "../context/SimulatiorContext";

function ChooseMinutes() {
    const { minutes } = useContext(SimulatorContext);
    
  return (
    <div>
        <input type="text" value={minutes.value} onChange={(e) => minutes.set(e.target.value)} />
    </div>
  );
}

export default ChooseMinutes;
