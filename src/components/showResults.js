import React, { useContext } from "react";
import { SimulationContext } from "../context/SimulationContext";
import "./styles/show_results.css";

function ShowResults() {
  const { withPlan, withoutPlan } = useContext(SimulationContext);

  return (
    <div className="show-result">
      <p>Resultado:</p>
      <div>
      <div className="with-plan"> {"R$ " + withPlan.value.toFixed(2)} </div>
      <div className="without-plan"> {"R$ " + withoutPlan.value.toFixed(2)} </div>
      </div>
    </div>
  );
}

export default ShowResults;
