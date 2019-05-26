import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import shortId from "shortid";

class Sidebar extends Component {
  _renderOrganization = ({ id, nom }, idx) => (
    <li
      className={`list-group-item ${this.props.selected &&
        this.props.selected.id === id &&
        "active-organization"} ${idx > 0 ? "mt-2" : ""}`}
      key={shortId.generate()}
    >
      <Link to={`/app/organizations/${id}`} className="cursor-pointer">
        <button className="btn organization-logo">
          {nom.charAt(0).toUpperCase()}
        </button>
        <button className="btn squared-btn">{nom}</button>
      </Link>
    </li>
  );

  render() {
    return (
      <Fragment>
        <div className="col-2 pt-4" id="sidebar">
          <div id="sidebar-top">
            <Link
              className="primary-link text-color-primary pl-3 text-lg"
              to="/app/organizations"
            >
              My Organizations
            </Link>
            <ul className="list-group list-group-flush mt-4">
              {this.props.organizations.map(this._renderOrganization)}
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to="/app/organizations/new">
                  <i
                    className="fas fa-plus mr-2"
                    data-toggle="modal"
                    data-target="#new-organization"
                  />
                  New Organization
                </Link>
              </li>
              {this.props.update && (
                <li className="list-group-item">
                  <Link
                    to={`/app/organizations/${this.props.selected.id}/update`}
                  >
                    <i className="fas fa-cog mr-2" />
                    Update Organization
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(Sidebar);
