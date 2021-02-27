import React, { useContext } from "react";
import { SimulatorContext } from "../context/SimulatiorContext";

function PlanBlock(props) {
  const { plan } = useContext(SimulatorContext);
  const { planMinutes } = props;

  function changePlan(planCliked) {
    plan.set(planCliked);
  }

  return (
    <button onClick={() => changePlan(planMinutes)}>
      <h1> {planMinutes} </h1>
    </button>
  );
}

export default PlanBlock;
