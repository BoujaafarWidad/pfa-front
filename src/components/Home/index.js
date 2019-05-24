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
        <div className="view max-width">
          <div id="section1" className="container-fluid">
            <h1>Section 1</h1>
            <p>
              Nulla facilisi. Ut sit amet cursus dui , quis imperdiet dolor.
              Duis non mollis augue. Sed elementum dolor vitae mauris
              scelerisque posuere.
            </p>
            <p>
              Nulla facilisi. Ut sit amet cursus dui , quis imperdiet dolor.
              Duis non mollis augue. Sed elementum dolor vitae mauris
              scelerisque posuere.
            </p>
          </div>
          <div id="section2" className="container-fluid">
            <h1>Section 2</h1>
            <p>
              Nulla facilisi. Ut sit amet cursus dui , quis imperdiet dolor.
              Duis non mollis augue. Sed elementum dolor vitae mauris
              scelerisque posuere.
            </p>
            <p>
              Nulla facilisi. Ut sit amet cursus dui , quis imperdiet dolor.
              Duis non mollis augue. Sed elementum dolor vitae mauris
              scelerisque posuere.
            </p>
          </div>
          <div />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
