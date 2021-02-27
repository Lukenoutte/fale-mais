import React, { createContext, useRef, useState } from "react";
const SimulationContext = createContext();

function SimulationProvider({ children }) {
  const allCities = useRef(["011", "016", "017", "018"]);
  const [origin, setOrigin] = useState("011");
  const [destination, setDestination] = useState("011");
  const [plan, setPlan] = useState("30");
  const [minutes, setMinutes] = useState("");
  const [valueWithPlan, setValueWithPlan] = useState(0);
  const [valueWithoutPlan, setValueWithoutPlan] = useState(0);

  function handleSelectOrigin(event) {
    setOrigin(event.target.value);
  }

  function handleSelectDestination(event) {
    setDestination(event.target.value);
  }


  return (
    <SimulationContext.Provider
      value={{
        allCities,
        origin: { value: origin, set: handleSelectOrigin },
        destination: { value: destination, set: handleSelectDestination },
        plan: { value: plan, set:  setPlan },
        minutes: { value: minutes, set: setMinutes },
        withPlan: { value: valueWithPlan, set: setValueWithPlan },
        withoutPlan: { value: valueWithoutPlan, set: setValueWithoutPlan },
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
}

export { SimulationContext, SimulationProvider };
