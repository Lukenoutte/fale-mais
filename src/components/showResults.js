import React, { useContext } from "react";
import { SimulationContext } from "../context/SimulationContext";

function ShowResults() {
  const { withPlan, withoutPlan } = useContext(SimulationContext);

  return (
    <div>
      <h1> {withPlan.value} </h1>
      <h1> {withoutPlan.value} </h1>
    </div>
  );
}

export default ShowResults;
