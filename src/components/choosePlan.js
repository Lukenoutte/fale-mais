import React from "react";
import PlanBlock from "./planBlock";
import "./styles/choose-plan.css";

function ChoosePlan() {


  return (
    <div className="choose-plan">
      <p>Fale de graça por 30, 60 ou 120 minutos.</p>
      <PlanBlock planMinutes={30} />
      <PlanBlock planMinutes={60} />
      <PlanBlock planMinutes={120} />
    </div>
  );
}

export default ChoosePlan;
