import React, { Component } from "react";
import "./assets/css/index.css";
import notFoundImg from "./assets/img/not_found_404.png";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div id="not-found" className="text-center">
        <img alt="Not Found 404" src={notFoundImg} />
        <h2 className="text-color-primary mt-4">Resource Not Found</h2>
        <Link to="/" className="btn primary-btn mt-5">
          Go Back Home
        </Link>
      </div>
    );
  }
}

export default NotFound;
