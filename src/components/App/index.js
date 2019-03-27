import React, { Component, Fragment } from "react";
import Header from "./components/Header/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h2>Hello World !</h2>
      </Fragment>
    );
  }
}

export default App;
