import React from "react";

import PlanBlock from "./planBlock";

function ChoosePlan() {


  return (
    <div>
      <PlanBlock planMinutes={30} />
      <PlanBlock planMinutes={60} />
      <PlanBlock planMinutes={120} />
    </div>
  );
}

export default ChoosePlan;
