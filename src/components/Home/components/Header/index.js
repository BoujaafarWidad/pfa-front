import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="navbar"
        >
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
                <Link className="nav-link" to="/">
                  <span>Home</span>
                </Link>
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
                <a className="nav-link" data-toggle="modal" href="#contact">
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
        <div
          className="modal fade"
          id="contact"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-color-primary " id="contact">
                  Get in touch!
                </h5>
              </div>
              <div className="modal-body">
                <form id="first-form">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label
                          htmlFor="first-name"
                          className="text-color-primary"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="form-control text-color-primary"
                          id="name"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label
                          htmlFor="second-name"
                          className="text-color-primary"
                        >
                          Second name *
                        </label>
                        <input
                          type="text"
                          className="form-control text-color-primary"
                          id="name"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-color-primary">
                      Email *
                    </label>
                    <input
                      type="text"
                      className="form-control text-color-primary"
                      id="name"
                      placeholder="john.doe@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="thoughts" className="text-color-primary">
                      Your thoughts *
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      id="description"
                      placeholder=" "
                    />
                  </div>
                  <button type="submit" className="btn primary-btn float-right">
                    Send
                  </button>
                  <div className="cancel-button">
                    <button type="submit" className="btn primary-btn ">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
