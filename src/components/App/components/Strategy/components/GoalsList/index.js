import React, { Component } from "react";
import { Link } from "react-router-dom";
import shortId from "shortid";
import "./assets/css/index.css";
import Spinner from "../../../Spinner/index";
import axios from "axios";

class GoalsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInput: "",
      goals: null
    };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:8080/goals/strategy/${this.props.selected.id}`)
      .then(res => this.setState({ goals: res.data }))
      .catch(e => console.log(e));
  }

  _renderGoal = ({ id, nom, desc, indicateur }) => (
    <div className="card strategy" key={shortId.generate()}>
      <div className="card-body">
        <div className="card-title text-color-primary text-lg">
          {nom}
          <span className="text-color-secondary indicateur-goal text-sm">
            {indicateur} %
          </span>
        </div>
        <hr />
        <p className="card-text text-color-secondary">{desc}</p>
        <Link
          className="btn primary-btn"
          to={`/app/organizations/${
            this.props.idSelectedOrganization
          }/strategies/${this.props.selected.id}/goals/${id}`}
        >
          <i className="fas fa-sign-in-alt mr-2" />
          Enter
        </Link>
      </div>
    </div>
  );

  render() {
    return (
      (this.state.goals && (
        <div className="col-10 pt-3 main-panel" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col-6">
              <span className="text-color-secondary">
                Workspace / {this.props.selected.nom} /{" "}
              </span>
              <span className="text-color-primary">Goals</span>
            </div>
            <div className="col-6 text-right">
              <Link
                className="btn primary-btn"
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selected.id}/goals/new`}
              >
                <i className="fas fa-plus mr-3" />
                Add goal
              </Link>
            </div>
          </div>
          <div id="filter-process-panel" className="row pr-3 mt-4 mb-5">
            <div className="col">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="filter-goal-icon">
                    <i className="fas fa-filter" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter process"
                  aria-describedby="filter-goal-icon"
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
              {this.state.goals
                .filter(({ nom }) => nom.includes(this.state.filterInput))
                .map(this._renderGoal)}
            </div>
          </div>
        </div>
      )) || <Spinner />
    );
  }
}

export default GoalsList;
