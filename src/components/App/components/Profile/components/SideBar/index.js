import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-2 pt-4 pr-0" id="sidebar">
          <div id="sidebar-top">
            <div className="ml-3 mb-3">
              <i className="fas fa-fingerprint mr-3" />
              {this.props.user.email}
            </div>
            <hr />
            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item active-organization">
                <Link className="text-lg" to="./">
                  <i className="far fa-user mr-3" />
                  Profile
                </Link>
              </li>
              <li className="list-group-item mt-2">
                <Link className="text-lg">
                  <i className="far fa-bell mr-3" />
                  Messages
                </Link>
              </li>
              <li className="list-group-item mt-2">
                <Link className="text-lg">
                  <i className="far fa-envelope mr-3" />
                  Notifications
                </Link>
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to={`/app/profile/${this.props.user.id}/update`}>
                  <i className="fas fa-cog mr-2" />
                  Update Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Sidebar);
