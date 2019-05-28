import React, { Component } from "react";
import { Link } from "react-router-dom";
import shortId from "shortid";
import "./assets/css/index.css";
import Spinner from "../../../Spinner/index";
import axios from "axios";

class ProgramsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInput: "",
      programs: null
    };
  }

  componentWillMount() {
    axios
      .get(
        `http://localhost:8080/programs/strategies/${this.props.selected.id}`
      )
      .then(res => this.setState({ programs: res.data }))
      .catch(e => console.log(e));
  }

  _renderProgram = ({ id, nom, desc, indicateur, processus, objectif }) => (
    <div className="card program" key={shortId.generate()}>
      <div className="card-body">
        <div className="card-title text-color-primary text-lg">
          {nom}
          <span className="text-color-secondary indicateur-program text-sm">
            {indicateur}%
          </span>
        </div>
        <div className="card-title text-color-secondary">
          Process: {processus.nom}
        </div>
        <div className="card-title text-color-secondary">
          Goal: {objectif.nom}
        </div>
        <hr />
        <p className="card-text text-color-secondary">{desc}</p>
        <Link
          className="btn primary-btn"
          to={`/app/organizations/${
            this.props.idSelectedOrganization
          }/strategies/${this.props.selected.id}/programs/${id}`}
        >
          <i className="fas fa-sign-in-alt mr-2" />
          Enter
        </Link>
      </div>
    </div>
  );

  render() {
    return (
      (this.state.programs && (
        <div className="col-10 pt-3 main-panel" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col-6">
              <span className="text-color-secondary">
                Workspace / {this.props.selected.nom} /{" "}
              </span>
              <span className="text-color-primary">Programs</span>
            </div>
            <div className="col-6 text-right">
              <Link
                className="btn primary-btn"
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selected.id}/programs/new`}
              >
                <i className="fas fa-plus mr-3" />
                Add program
              </Link>
            </div>
          </div>
          <div id="filter-program-panel" className="row pr-3 mt-4 mb-5">
            <div className="col">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="filter-program-icon">
                    <i className="fas fa-filter" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter program"
                  aria-describedby="filter-program-icon"
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
              {this.state.programs
                .filter(({ nom }) => nom.includes(this.state.filterInput))
                .map(this._renderProgram)}
            </div>
          </div>
        </div>
      )) || <Spinner />
    );
  }
}

export default ProgramsList;
