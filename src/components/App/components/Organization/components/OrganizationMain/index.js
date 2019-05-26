import React, { Component } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import shortId from "shortid";

class OrganizationMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInput: ""
    };
  }

  _renderStrategy = ({ id, nom, desc, stratege, dateDebut }) => (
    <div className="card strategy" key={shortId.generate()}>
      <div className="card-body">
        <div className="card-title text-color-primary text-lg">
          {nom}
          <span className="text-color-secondary date-strategy text-sm">
            {dateDebut}
          </span>
        </div>
        <div className="card-title text-color-secondary">{stratege.nom}</div>
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
    return (
      <div className="col-10 p-3 main-panel" id="main">
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
        <div id="filter-strategy-panel" className="row pr-3 mt-4 mb-5">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="filter-icon">
                  <i className="fas fa-filter" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Filter strategies"
                aria-describedby="filter-icon"
                value={this.state.filterInput}
                onChange={event =>
                  this.setState({ filterInput: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="pt-5 pr-3">
          <div className="card-columns">
            {this.props.strategies
              .filter(
                strategy => strategy.organisation.id === this.props.selected.id
              )
              .filter(({ nom }) => nom.includes(this.state.filterInput))
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
