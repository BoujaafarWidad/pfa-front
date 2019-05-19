import React, { Component, Fragment } from "react";
import Organization from "./components/Organization";
import "./assets/css/index.css";

class App extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Organization />
      </Fragment>
    );
  }
}

export default App;
