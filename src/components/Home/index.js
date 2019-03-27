import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

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
