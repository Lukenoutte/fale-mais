import React, { useContext } from "react";
import { SimulationContext } from "../../context/SimulationContext";
import ResultsBlock from "./resultsBlock";

function ShowResults() {
  const { withPlan, withoutPlan, plan } = useContext(SimulationContext);

  return (
    <div className="show-result">
      <p>Resultado:</p>
      <div>
        <ResultsBlock
          money={withPlan.value.toFixed(2)}
          label={`FaleMais ${plan.value}`}
        />
        
        <ResultsBlock money={withoutPlan.value.toFixed(2)} label="Sem plano" />
      </div>
    </div>
  );
}

export default ShowResults;
