import React, { useContext } from "react";
import { SimulationContext } from "../../context/SimulationContext";
import "./styles/plan_block.css";

function PlanBlock(props) {
  const { plan } = useContext(SimulationContext);
  const { planProp } = props;

  function changePlan(planCliked) {
    plan.set(planCliked);
  }

  function classPlanBlock() {
    if (planProp !== plan.value) return "";
    return "selected-plan";
  }

  return (
    <button
      className={classPlanBlock() + " plan-block "}
      onClick={() => changePlan(planProp)}
    >
      <p>FaleMais</p>
      <h1> {planProp} </h1>
      <p>minutos</p>
    </button>
  );
}

export default PlanBlock;
