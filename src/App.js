import React from 'react';
import "./styles/global.css";
import Simulation from "./container/simulation";
import Header from "./components/header/header";
import { SimulationProvider } from "./context/SimulationContext";

function App() {

  return (
    <SimulationProvider>
    <Header/>
    <Simulation/>
    <footer/>
    </SimulationProvider>
  );
}

export default App;
