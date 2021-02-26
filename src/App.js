import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [origin, setOrigin] = useState("011");
  const [destination, setDestination] = useState("011");
  const [plan, setPlan] = useState("30");
  const [valueWithPlan, setValueWithPlan] = useState("");
  const [valueWithoutPlan, setValueWithoutPlan] = useState("");
  const minutesInput = useRef("");

  function handleSelectOrigin(event) {
    setOrigin(event.target.value);

  }

  function handleSelectDestination(event) {
    setDestination(event.target.value);
  }

  function handleSelectPlan(event) {
    setPlan(event.target.value);
  }

  function calculateValues() {
    setValueWithPlan("Hey");
    let moneyPerMinute = 0;
    let minutes = minutesInput.current.value;

    const cities = {
      "011_016": origin === "011" && destination === "016",
      "016_011": origin === "016" && destination === "011",
      "011_017": origin === "011" && destination === "017",
      "017_011": origin === "017" && destination === "011",
      "011_018": origin === "011" && destination === "018",
      "018_011": origin === "018" && destination === "011",
    }

    switch (true) {

      case cities["011_016"] || cities["018_011"]:
        moneyPerMinute = 1.90;
        break;
      case cities["016_011"]:
        moneyPerMinute = 2.90;
        break;
      case cities["011_017"]:
        moneyPerMinute = 1.70;
        break;
      case cities["017_011"]:
        moneyPerMinute = 2.70;
        break;
      case cities["011_018"]:
        moneyPerMinute = 0.90;
        break;

      default:
    }


    if (moneyPerMinute !== 0) {
      // Sem plano FaleMais
      let normalValue = minutes * moneyPerMinute;
      setValueWithoutPlan(normalValue);
      console.log(normalValue);
      // Com o plano FaleMais
      let minutesUsingPlan = minutes - parseInt(plan);

      if (minutesUsingPlan > 0) {
        let tariff = (10 / 100) * minutesUsingPlan;

        let valueUsingPlan = (minutesUsingPlan + tariff) * moneyPerMinute;
        setValueWithPlan(valueUsingPlan);
        console.log(valueUsingPlan);
      } else {
        setValueWithPlan(0);
      }

    } else {
      console.log("Something wrong! :(")
    }

  }

  return (
    <div className="App">
      <h1>FaleMais</h1>
      <div className="main-container">
        <input type="text" ref={minutesInput} />
        <select
          name="languages"
          value={origin}
          onChange={(e) => handleSelectOrigin(e)}
        >
          <option value="011"> 011 </option>
          <option value="016"> 016 </option>
          <option value="017"> 017 </option>
          <option value="018"> 018 </option>

        </select>

        <select
          name="languages"
          value={destination}
          onChange={(e) => handleSelectDestination(e)}
        >
          <option value="011"> 011 </option>
          <option value="016"> 016 </option>
          <option value="017"> 017 </option>
          <option value="018"> 018 </option>

        </select>

        <select
          name="languages"
          value={plan}
          onChange={(e) => handleSelectPlan(e)}
        >
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="120">120</option>

        </select>
        <button onClick={calculateValues}>Calcular</button>
      </div>
    </div>
  );
}

export default App;
