import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-3 pt-4" id="sidebar">
          <div id="sidebar-top">
            <h4 className="text-color-primary mb-4 pl-3">My Organizations</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item active-organization">
                <Link to="/app/organizations" className="cursor-pointer">
                  <button className="btn organization-logo">O</button>
                  <button className="btn squared-btn">Organization</button>
                </Link>
              </li>
              <li className="list-group-item">
                <button className="btn organization-logo">F</button>
                <button className="btn squared-btn">Foundation</button>
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to="/app/organizations/new" className="primary-link">
                  <i
                    className="fas fa-plus mr-3"
                    data-toggle="modal"
                    data-target="#new-organization"
                  />
                  New Organization
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/app/organizations/1/update" className="primary-link">
                  <i className="fas fa-cog mr-3" />
                  Update Organization
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
