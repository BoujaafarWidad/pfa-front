import React, { Component } from "react";
import "./assets/css/index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4" id="footer">
        <div className="container-fluid text-md-left text-left">
          <div className="row">
            <div className="col-lg-2 mt-md-0 mt-3" />
            <div className="col-lg-3 mt-md-0 mt-3 d-none d-lg-block">
              &copy; 2019 BRAND
            </div>
            <div className="col-lg-3 mb-md-0 mb-3">
              <h6 className="d-none d-lg-block footer-section-title">
                <span>Follow us</span>
              </h6>
              <ul className="list-unstyled d-none d-lg-block">
                <li>
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <a href="#!">Twitter</a>
                </li>
                <li>
                  <a href="#!">Github</a>
                </li>
              </ul>

              <h6 className="text-center d-lg-none footer-section-title">
                <span>Follow us</span>
              </h6>
              <ul className="list-unstyled text-center d-lg-none">
                <li>
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <a href="#!">Twitter</a>
                </li>
                <li>
                  <a href="#!">Github</a>
                </li>
                <hr />
              </ul>
            </div>

            <div className="col-lg-3 mb-md-0 mb-3">
              <h6 className="d-none d-lg-block footer-section-title">
                <span>Useful link</span>s
              </h6>
              <ul className="list-unstyled d-none d-lg-block">
                <li>
                  <a href="#!">Terms of service</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>

              <h6 className="text-center d-lg-none footer-section-title">
                <span>Useful links</span>
              </h6>
              <ul className="list-unstyled text-center d-lg-none">
                <li>
                  <a href="#!">Terms of service</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="footer-copyright text-center py-3 d-lg-none"
            id="double-footer"
          >
            © 2019 BRAND
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
