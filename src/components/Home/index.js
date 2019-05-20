import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/index.css";

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
