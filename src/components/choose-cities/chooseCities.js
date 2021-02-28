import React, { useContext } from "react";
import { SimulationContext } from "../../context/SimulationContext";
import Select from "./select";
import "./styles/choose_cities.css";

function ChooseCities() {
  const { origin, destination } = useContext(SimulationContext);

  function rightCitiesOnSelect() {
    if (origin.value === "011") {
      return ["016", "017", "018"];
    } else {
 
      return ["011"];
    }
  }

  return (
    <div className="choose-cities">
      <p>Escolha as cidades de origem e destino.</p>
      <div className="selects-choose-cities">
        <Select
          handleSelect={origin.set}
          value={origin.value}
          myOptions={["011", "016", "017", "018"]}
          label="Origem"
        />
        <div className="destination-select">
          <Select
            handleSelect={destination.set}
            value={destination.value}
            myOptions={rightCitiesOnSelect()}
            label="Destino"
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseCities;
