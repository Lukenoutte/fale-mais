import React, { useContext } from "react";
import { SimulationContext } from "../context/SimulationContext";
import "./styles/plan_block.css";

function PlanBlock(props) {
  const { plan } = useContext(SimulationContext);
  const { planMinutes } = props;

  function changePlan(planCliked) {
    plan.set(planCliked);
  }

  return (
    <button className="plan-block" onClick={() => changePlan(planMinutes)}>
      <p>FaleMais</p>
      <h1> {planMinutes} </h1>
    </button>
  );
}

export default PlanBlock;
