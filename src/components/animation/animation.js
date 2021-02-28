import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../assets/mainAnimationLoop.json";

function Animation(props) {

  return <Lottie loop animationData= {animationData} play style={{ width: 500, height: 450 }}/>;
}

export default Animation;
