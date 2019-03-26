import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
          <Link className="navbar-brand text-color-primary" to="/" id="brand">
            BRAND
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-links"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nav-links">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="!#">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  <span>Tutorial</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  <span>About us</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav my-2 my-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  <span>Sign in</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
