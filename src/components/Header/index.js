import React, { Component } from "react";
import "./assets/css/index.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
          <a className="navbar-brand text-color-primary" href="./" id="brand">
            BRAND
          </a>
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
                <a className="nav-link" href="!#">
                  <span>Sign in</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  <span>Sign up</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
