import React, { Component, Fragment } from "react";
import AddStrategyForm from "./components/AddStrategyForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";

class AddStrategy extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="strategy-add">
          <Sidebar />
          <AddStrategyForm />
        </div>
      </Fragment>
    );
  }
}

export default AddStrategy;
