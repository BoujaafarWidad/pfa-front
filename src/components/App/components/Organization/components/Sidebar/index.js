import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import shortId from "shortid";

class Sidebar extends Component {
  _renderOrganization = ({ id, nom }) => (
    <li
      className={`list-group-item ${this.props.selected &&
        this.props.selected.id === id &&
        "active-organization"}`}
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
        <div className="col-3 pt-4" id="sidebar">
          <div id="sidebar-top">
            <h4 className="text-color-primary mb-4 pl-3">
              <Link className="primary-link" to="/app/organizations">
                My Organizations
              </Link>
            </h4>
            <ul className="list-group list-group-flush">
              {this.props.organizations.map(this._renderOrganization)}
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
              {this.props.update && (
                <li className="list-group-item">
                  <Link
                    to={`/app/organizations/${this.props.selected.id}/update`}
                    className="primary-link"
                  >
                    <i className="fas fa-cog mr-3" />
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
