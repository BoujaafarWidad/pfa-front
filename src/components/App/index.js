import React, { Component, Fragment } from "react";
import Organizations from "./components/Organization";
import "./assets/css/index.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Organizations />
      </Fragment>
    );
  }
}

export default App;
