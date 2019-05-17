import React, { Component, Fragment } from "react";
import Sidebar from "./components/Sidebar/index";
import Overview from "./components/Overview/index";
import Header from "../Header/index";
import "./assets/css/index.css";

class Strategy extends Component {
  componentWillMount() {
    document.title = "Strategy";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="strategy">
          <Sidebar />
          <Overview />
        </div>
      </Fragment>
    );
  }
}

export default Strategy;
