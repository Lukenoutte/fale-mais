import React from "react";
import PlanBlock from "./planBlock";


function ChoosePlan() {


  return (
    <div className="choose-plan">
      <p>Fale de graça por 30, 60 ou 120 minutos.</p>
      <PlanBlock planProp={30} />
      <PlanBlock planProp={60} />
      <PlanBlock planProp={120} />
    </div>
  );
}

export default ChoosePlan;
