import React, { Component, Fragment } from "react";
import Header from "./components/Header/index";
import Organization from "./components/Organization";
import "./assets/css/index.css";

class App extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Organization />
      </Fragment>
    );
  }
}

export default App;
