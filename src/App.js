import React from 'react';
import "./styles/global.css";
import Simulator from "./container/simulator";
import Header from "./components/header";
import { SimulatorProvider } from "./context/SimulatiorContext";

function App() {

  return (
    <SimulatorProvider>
    <Header/>
    <Simulator/>
    </SimulatorProvider>
  );
}

export default App;
