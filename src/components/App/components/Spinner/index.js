import React, { Component } from "react";
import spinnerImg from "./assets/img/three-dots.svg";
import "./assets/css/index.css";

class Spinner extends Component {
  render() {
    return <img id="spinner" src={spinnerImg} alt="Fetching data ..." />;
  }
}

export default Spinner;
