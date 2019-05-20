import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-3 pt-4 pr-0" id="sidebar">
          <div id="sidebar-top">
            <div className="ml-3 mb-3">
              <button className="btn organization-logo">S</button>
              <button className="btn squared-btn text-color-primary pl-2">
                Strategy
              </button>
              <button
                id="add-strategy"
                className="btn squared-btn text-color-primary pl-2"
              />
            </div>
            <hr />
            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">
                <i className="fas fa-eye mr-3" />
                Overview
              </li>
              <li className="list-group-item">
                <i className="fas fa-recycle mr-3" />
                Process
              </li>
              <li className="list-group-item">
                <i className="fas fa-bullseye mr-3" />
                Goals
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link
                  to="app/organizations/1/strategies/1/update"
                  className="primary-link"
                >
                  <i className="fas fa-cog mr-3" />
                  Update strategy
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
