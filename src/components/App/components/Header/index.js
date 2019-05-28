import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./assets/css/index.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light fixed-top" id="navbar">
          <Link
            className="navbar-brand text-color-primary mr-auto"
            to="/"
            id="brand"
          >
            BRAND
          </Link>
          <div className="dropdown">
            <Link
              className="nav-link dropdown-toggle rounded-btn"
              data-toggle="dropdown"
              to="/sign-up"
            >
              <div className="text-center">J</div>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right"
              id="dropdown-menu"
            >
              <Link className="dropdown-item" to="./">
                <i className="fas fa-fingerprint mr-3" /> jane.doe@gmail.com
              </Link>
              <div className="dropdown-divider" />
              <Link
                className="dropdown-item"
                to={`/app/profile/${this.props.user.id}`}
              >
                <i className="far fa-user mr-3" /> Profile
              </Link>
              <Link className="dropdown-item" to="./">
                <i className="far fa-bell mr-3" /> Notifications
              </Link>
              <Link className="dropdown-item" to="./">
                <i className="far fa-envelope mr-3" /> Messages
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="./">
                <i className="fas fa-sign-out-alt mr-3" /> Sign out
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
