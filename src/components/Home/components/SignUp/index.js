import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIndex: 0
    };
  }

  componentWillMount() {
    document.title = "Sign up";
  }

  _handleNextClick = e => {
    e.preventDefault();
    this.setState({ formIndex: 1 });
  };

  _handlePreviousClick = e => {
    e.preventDefault();
    this.setState({ formIndex: 0 });
  };

  render() {
    const firstForm = (
      <form id="first-form">
        <div className="form-group">
          <label htmlFor="first-name" className="text-color-primary">
            First name
          </label>
          <input
            type="text"
            className="form-control text-color-primary"
            id="first-name"
            placeholder="Jane"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name" className="text-color-primary">
            Last name
          </label>
          <input
            type="text"
            className="form-control text-color-primary"
            id="last-name"
            placeholder="Doe"
          />
        </div>
        <button
          type="submit"
          className="btn primary-btn"
          onClick={this._handleNextClick}
        >
          Next
        </button>
      </form>
    );
    const secondForm = (
      <form id="second-form">
        <div className="form-group">
          <label htmlFor="email" className="text-color-primary">
            Email
          </label>
          <input
            type="email"
            className="form-control text-color-primary"
            id="email"
            placeholder="jane.doe@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-color-primary">
            Password
          </label>
          <input
            type="password"
            className="form-control text-color-primary"
            id="password"
            placeholder="*******"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password" className="text-color-primary">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control text-color-primary"
            id="confirm-password"
            placeholder="*******"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn primary-btn float-left"
            onClick={this._handlePreviousClick}
          >
            Previous
          </button>
          <button type="submit" className="btn primary-btn float-right">
            Finish
          </button>
        </div>
      </form>
    );
    return (
      <Fragment>
        <Header />
        <div className="row">
          <div className="col-1 col-sm-2 col-lg-3 col-xl-4" />
          <div className="col-10 col-sm-8 col-lg-6 col-xl-4">
            <div id="signup-card">
              <h4 className="text-center text-color-primary">SIGN UP</h4>
              <hr />
              {this.state.formIndex === 0 && firstForm}
              {this.state.formIndex === 1 && secondForm}
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
