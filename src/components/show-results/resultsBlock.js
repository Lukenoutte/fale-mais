import React from "react";

import "./styles/results_block.css";

function ResultsBlock(props) {
const { money, label } = props;

  return (
    <div className="results-block">
      <p>{label}</p>
      <div className="value-money">
      <div> {"R$ " + money} </div>
      </div>
    </div>
  );
}

export default  ResultsBlock;
