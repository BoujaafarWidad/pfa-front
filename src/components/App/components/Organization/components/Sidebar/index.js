import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import shortId from "shortid";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrganization: -1
    };
  }

  _renderOrganization = ({ nom }, idx) => (
    <li
      className={`list-group-item ${this.state.selectedOrganization === idx &&
        "active-organization"}`}
      onClick={() => this.setState({ selectedOrganization: idx })}
      key={shortId.generate()}
    >
      <Link to="/app/organizations" className="cursor-pointer">
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
            <h4 className="text-color-primary mb-4 pl-3">My Organizations</h4>
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

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(Sidebar);
