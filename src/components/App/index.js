import React, { Component, Fragment } from "react";
import Header from "./components/Header/index";
import Sidebar from "./components/Sidebar";
import "./assets/css/index.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="app">
          <Sidebar />
        </div>
      </Fragment>
    );
  }
}

export default App;
