import React from "react";
import "./styles/header.css";

function Header() {
  return (
    <header>
      <div className="g-centrilize"> 
        <div className="logo"><a href="/">Telzir.</a></div>
       
        <button className="g-button-style" >Planos</button>
      </div>
    </header>
  );
}

export default Header;
