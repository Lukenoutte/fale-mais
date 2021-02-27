import React, { useState, useContext } from "react";
import ChooseMinutes from "../components/chooseMinutes";
import ChooseCities from "../components/chooseCities";
import ChoosePlan from "../components/choosePlan";
import ShowResults from "../components/showResults.js";
import tariff from "../components/tariff";
import { SimulationContext } from "../context/SimulationContext";
import "../styles/simulation.css";
import Lottie from "react-lottie";
import animationData from "../assets/drawkit-LOOP.json";
import { ReactComponent as PreviousIcon } from "../assets/previousIcon.svg";

function Simulator() {
  const [pageControl, setPageControl] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    plan,
    origin,
    destination,
    minutes,
    withPlan,
    withoutPlan,
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
    if (pageControl < 3)
      setPageControl((prevPageControl) => prevPageControl + 1);

    if (pageControl === 2) {
      calculateValues();
    }
  }

  function calculateValues() {
    let moneyPerMinute = tariff(origin.value, destination.value);

    if (moneyPerMinute !== 0) {
      calculateValueWithoutPlan(moneyPerMinute);

      calculateValueWithPlan(moneyPerMinute);
    } else {
      console.log("Something wrong! :(");
    }
  }

  function calculateValueWithoutPlan(moneyPerMinute) {
    let typedMinutes = minutes.value;
    let normalValue = typedMinutes * moneyPerMinute;
    withoutPlan.set(normalValue);
    console.log(normalValue);
  }

  function calculateValueWithPlan(moneyPerMinute) {
    let typedMinutes = minutes.value;
    let minutesLeftUsingPlan = typedMinutes - parseInt(plan.value);
    const percentTariff = 10;

    if (minutesLeftUsingPlan > 0) {
      let tariffValue = (percentTariff / 100) * minutesLeftUsingPlan;

      let valueUsingPlan =
        (minutesLeftUsingPlan + tariffValue) * moneyPerMinute;
      withPlan.set(valueUsingPlan);
      console.log(valueUsingPlan);
    } else {
      withPlan.set(0);
    }
  }

  return (
    <div className="simulator">
      <div className="g-centrilize">
        <div className="left-container">
          <div className="labels">
            <h1>FaleMais</h1>
            <p>
              Escolha o plano que mais se parece com você. Faça a simulação
              agora!
            </p>
          </div>
          <div className="wrapper-simulator">{pages[pageControl]}</div>
          <div className="page-control-buttons">
            <button className="g-button-style previous-button" onClick={backPage}>
              <PreviousIcon className="previous-icon" />
            </button>
            <button className="g-button-style next-button" onClick={nextPage}>
              Avançar
            </button>
          </div>
        </div>
        <div className="right-container">
          <Lottie options={defaultOptions} height={450} width={500} />
        </div>
      </div>
    </div>
  );
}

export default Simulator;