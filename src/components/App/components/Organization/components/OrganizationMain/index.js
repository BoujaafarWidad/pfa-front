import React, { Component } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import shortId from "shortid";

class OrganizationMain extends Component {
  _renderStrategy = ({ id, nom, desc }) => (
    <div className="card strategy" key={shortId.generate()}>
      <div className="card-body">
        <h5 className="card-title text-color-primary">{nom}</h5>
        <hr />
        <p className="card-text text-color-secondary">{desc}</p>
        <Link
          className="btn primary-btn"
          to={`/app/organizations/${this.props.selected.id}/strategies/${id}`}
        >
          <i className="fas fa-sign-in-alt mr-2" />
          Enter
        </Link>
      </div>
    </div>
  );

  render() {
    console.log("strategies", this.props.strategies);
    return (
      <div className="col-9 p-3" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <span className="text-color-secondary">Workspace / </span>
            <span className="text-color-primary">
              {this.props.selected.nom}
            </span>
          </div>
          <div className="col-6 text-right">
            <Link
              className="btn primary-btn"
              to={`/app/organizations/${this.props.selected.id}/strategies/new`}
            >
              <i className="fas fa-plus mr-3" />
              Add strategy
            </Link>
          </div>
        </div>
        <div className="pt-5 pr-3">
          <div className="card-columns">
            {this.props.strategies
              .filter(
                strategy => strategy.organisation.id === this.props.selected.id
              )
              .map(this._renderStrategy)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ organizations, strategies }) => ({
  organizations,
  strategies
});

export default connect(mapStateToProps)(OrganizationMain);
