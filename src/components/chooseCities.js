import React, { useContext } from "react";
import { SimulatorContext } from "../context/SimulatiorContext";
import Select from "./select";

function ChooseCities() {
  const { allCities, origin, destination } = useContext(SimulatorContext);

  return (
    <div>
      <Select
        handleSelect={origin.set}
        value={origin.value}
        myOptions={allCities.current}
      />
      
      <Select
        handleSelect={destination.set}
        value={destination.value}
        myOptions={allCities.current}
      />
    </div>
  );
}

export default ChooseCities;
