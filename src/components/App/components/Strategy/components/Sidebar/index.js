import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-2 pt-4 pr-0" id="sidebar">
          <div id="sidebar-top">
            <div className="ml-3 mb-3">
              <Link
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selected.id}`}
                className="cursor-pointer"
              >
                <button className="btn organization-logo">
                  {this.props.selected.nom.charAt(0).toUpperCase()}
                </button>
                <button className="btn squared-btn pl-2">
                  {this.props.selected.nom}
                </button>
              </Link>
            </div>
            <hr />
            <ul className="list-group list-group-flush mt-4">
              <li
                className={`list-group-item ${
                  this.props.active === "overview" ? "active-organization" : ""
                }`}
              >
                <Link
                  className="text-lg"
                  to={`/app/organizations/${
                    this.props.idSelectedOrganization
                  }/strategies/${this.props.selected.id}`}
                >
                  <i className="fas fa-eye mr-3" />
                  Overview
                </Link>
              </li>
              <li
                className={`list-group-item mt-2 ${
                  this.props.active === "process" ? "active-organization" : ""
                }`}
              >
                <Link
                  className="text-lg"
                  to={`/app/organizations/${
                    this.props.idSelectedOrganization
                  }/strategies/${this.props.selected.id}/process`}
                >
                  <i className="fas fa-recycle mr-3" />
                  Process
                </Link>
              </li>
              <li
                className={`list-group-item mt-2 ${
                  this.props.active === "goals" ? "active-organization" : ""
                }`}
              >
                <Link
                  className="text-lg"
                  to={`/app/organizations/${
                    this.props.idSelectedOrganization
                  }/strategies/${this.props.selected.id}/goals`}
                >
                  <i className="fas fa-bullseye mr-3" />
                  Goals
                </Link>
              </li>
              <li
                className={`list-group-item mt-2 ${
                  this.props.active === "programs" ? "active-organization" : ""
                }`}
              >
                <Link
                  className="text-lg"
                  to={`/app/organizations/${
                    this.props.idSelectedOrganization
                  }/strategies/${this.props.selected.id}/programs`}
                >
                  <i className="fas fa-project-diagram mr-3" />
                  Programs
                </Link>
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link
                  to={`/app/organizations/${
                    this.props.idSelectedOrganization
                  }/strategies/${this.props.selected.id}/update`}
                >
                  <i className="fas fa-cog mr-2" />
                  Update Strategy
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
