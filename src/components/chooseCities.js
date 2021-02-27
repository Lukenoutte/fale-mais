import React, { useContext } from "react";
import { SimulationContext } from "../context/SimulationContext";
import Select from "./select";
import "./styles/choose_cities.css";


function ChooseCities() {
  const { allCities, origin, destination } = useContext(SimulationContext);

  return (
    <div className="choose-cities">
      <p>Escolha as cidades de origem e destino.</p>
      <div className="selects-choose-cities">
      <Select
        handleSelect={origin.set}
        value={origin.value}
        myOptions={allCities.current}
        label="Origem"
      />
      <div className="destination-select">
      <Select
        handleSelect={destination.set}
        value={destination.value}
        myOptions={allCities.current}
        label="Destino"
      />
      </div>
      </div>
    </div>
  );
}

export default ChooseCities;
