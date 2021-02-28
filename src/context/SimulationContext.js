import React, { createContext, useState } from "react";
const SimulationContext = createContext();

function SimulationProvider({ children }) {

  const [origin, setOrigin] = useState("011");
  const [destination, setDestination] = useState("016");
  const [plan, setPlan] = useState("");
  const [minutes, setMinutes] = useState("");
  const [valueWithPlan, setValueWithPlan] = useState(0);
  const [valueWithoutPlan, setValueWithoutPlan] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <SimulationContext.Provider
      value={{

        origin: { value: origin, set: setOrigin },
        destination: { value: destination, set: setDestination },
        plan: { value: plan, set: setPlan },
        minutes: { value: minutes, set: setMinutes },
        withPlan: { value: valueWithPlan, set: setValueWithPlan },
        withoutPlan: { value: valueWithoutPlan, set: setValueWithoutPlan },
        showPopUp: { value: showPopUp, set: setShowPopUp },
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
}

export { SimulationContext, SimulationProvider };
