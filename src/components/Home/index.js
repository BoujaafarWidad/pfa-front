import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Home extends Component {
  componentWillMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
