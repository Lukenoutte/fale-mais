import React, { useContext, useEffect } from "react";
import "./styles/pop_up.css";
import { SimulationContext } from "../../context/SimulationContext";

export default function PopUp(props) {
  const { showPopUp } = useContext(SimulationContext);
  const { message } = props;
  useEffect(() => {
    if (showPopUp.value) {
      setTimeout(() => {
        showPopUp.set(false);
      }, 2000);
    }
  }, [showPopUp]);

  return (
    <div className="pop-up-wrapper">
      <div className="pop-up">{message}</div>
    </div>
  );
}
