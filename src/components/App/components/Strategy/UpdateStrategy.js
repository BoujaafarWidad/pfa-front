import React, { Component, Fragment } from "react";
import Header from "../Header";
import Sidebar from "./components/Sidebar";
import UpdateStrategyForm from "./components/UpdateStrategyForm";

class UpdateStrategy extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="strategy">
          <Sidebar />
          <UpdateStrategyForm />>
        </div>
      </Fragment>
    );
  }
}

export default UpdateStrategy;
