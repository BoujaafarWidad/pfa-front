import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import Header from "../Header";

class Organizations extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="organizations">
          <Sidebar />
        </div>
      </Fragment>
    );
  }
}

export default Organizations;
