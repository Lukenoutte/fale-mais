import React, { useState, useContext } from "react";
import ChooseMinutes from "../components/choose-minutes/chooseMinutes";
import ChooseCities from "../components/choose-cities/chooseCities";
import ChoosePlan from "../components/choose-plan/choosePlan";
import ShowResults from "../components/show-results/showResults.js";
import tariff from "./utilits/tariff";
import { SimulationContext } from "../context/SimulationContext";
import "../styles/simulation.css";
import Animation from "../components/animation/animation";
import { ReactComponent as PreviousIcon } from "../assets/previousIcon.svg";
import PopUp from "../components/pop-up/popUp";

import { calculateWithoutPlan, calculateWithPlan } from "./utilits/calculate";

function Simulator() {
  const [pageControl, setPageControl] = useState(0);
  const [errorMessage, setErrorMessage] = useState("Preencha o campo.");
  const {
    plan,
    origin,
    destination,
    minutes,
    withPlan,
    withoutPlan,
    showPopUp,
  } = useContext(SimulationContext);

  const pages = {
    0: <ChooseMinutes />,
    1: <ChooseCities />,
    2: <ChoosePlan />,
    3: <ShowResults />,
  };

  function backPage() {
    if (pageControl > 0)
      setPageControl((prevPageControl) => prevPageControl - 1);
  }

  function nextPage() {
    if (handleErrors()) {
      showPopUp.set(true);
      return;
    }

    if (pageControl < 3)
      setPageControl((prevPageControl) => prevPageControl + 1);

    if (pageControl === 2) {
      calculateValues();
    }
  }

  function handleErrors() {
    let emptyMinutes = minutes.value === "0" || minutes.value === "";
    let emptyPlan = plan.value === "";

    if (pageControl === 0 && emptyMinutes) {
      setErrorMessage("Preencha o campo de minutos.");
      return true;
    }
    if (pageControl === 2 && emptyPlan) {
      setErrorMessage("Selecione um plano.");
      return true;
    }

    return false;
  }

  function disableButtonPreview() {
    if (pageControl === 0) return "disable-button-preview";
    return "";
  }

  function disableButtonNext() {
    if (pageControl === 3) return "disable-button-next";
    return "";
  }

  function calculateValues() {
    let moneyPerMinute = tariff(origin.value, destination.value);
    let typedMinutes = minutes.value;
    let planValue = parseInt(plan.value);

    if (moneyPerMinute !== 0) {
      let resultWithplan = calculateWithPlan(
        moneyPerMinute,
        typedMinutes,
        planValue
      );
      withPlan.set(resultWithplan);

      let resultWithoutplan = calculateWithoutPlan(
        moneyPerMinute,
        typedMinutes
      );
      withoutPlan.set(resultWithoutplan);
    } 
  }

  return (
    <div className="simulator">
      <div className="g-centrilize">
        <div className="left-container">
          <div className="labels">
            <h1>FaleMais</h1>
            <p>
              Escolha o plano que mais se parece com você. Faça a simulação.
            </p>
          </div>
          <div className="wrapper-simulator">{pages[pageControl]}</div>
          <div className="page-control-buttons">
            <button
              className={
                disableButtonPreview() + " g-button-style previous-button"
              }
              onClick={backPage}
            >
              <PreviousIcon className="previous-icon" />
            </button>

            <button
              className={disableButtonNext() + " g-button-style next-button"}
              onClick={nextPage}
            >
              {pageControl === 2 ? "Ver Resultados" : "Avançar"}
            </button>
          </div>
        </div>
        <div className="right-container">
          <Animation />
        </div>
      </div>
      {showPopUp.value && <PopUp message={errorMessage} />}
    </div>
  );
}

export default Simulator;
