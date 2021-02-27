import React, { useContext } from "react";
import { SimulatorContext } from "../context/SimulatiorContext";

function ShowResults() {
  const { withPlan, withoutPlan } = useContext(SimulatorContext);

  return (
    <div>
      <h1> {withPlan.value} </h1>
      <h1> {withoutPlan.value} </h1>
    </div>
  );
}

export default ShowResults;
