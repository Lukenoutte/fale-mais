import React, { useState, useContext } from "react";
import ChooseMinutes from "../components/chooseMinutes";
import ChooseCities from "../components/chooseCities";
import ChoosePlan from "../components/choosePlan";
import ShowResults from "../components/showResults.js";
import tariff from "../components/tariff";
import { SimulatorContext } from "../context/SimulatiorContext";

function Simulator() {
  const [pageControl, setPageControl] = useState(0);

  const {
    plan,
    origin,
    destination,
    minutes,
    withPlan,
    withoutPlan,
  } = useContext(SimulatorContext);

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

    if(pageControl === 2){
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
      <h1>FaleMais</h1>
      <div className="main-container">{pages[pageControl]}</div>
      <button onClick={backPage}>Voltar</button>
      <button onClick={nextPage}>
        Avançar
      </button>
    </div>
  );
}

export default Simulator;
