import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.css";

class SignIn extends Component {
  componentWillMount() {
    document.title = "Sign in";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row">
          <div className="col-1 col-sm-2 col-lg-3 col-xl-4" />
          <div className="col-10 col-sm-8 col-lg-6 col-xl-4">
            <div id="signin-card">
              <h4 className="text-center text-color-primary">SIGN IN</h4>
              <hr />
              <form>
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
                <button type="submit" className="btn primary-btn">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignIn;
