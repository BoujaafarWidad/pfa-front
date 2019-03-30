import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

class Organization extends Component {
  render() {
    return (
      <Fragment>
        <div className="row" id="organization">
          <Sidebar />
          <Main />
        </div>
      </Fragment>
    );
  }
}

export default Organization;
