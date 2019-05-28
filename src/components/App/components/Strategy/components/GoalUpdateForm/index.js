import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

class GoalUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.selectedGoal.id,
      nom: this.props.selectedGoal.nom,
      desc: this.props.selectedGoal.desc,
      strategie: this.props.selectedStrategy,
      redirect: false
    };
  }

  _handleRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={`/app/organizations/${
            this.props.idSelectedOrganization
          }/strategies/${this.props.selectedStrategy.id}/goals/${
            this.state.id
          }`}
        />
      );
    }
  };

  _handleSubmit = event => {
    event.preventDefault();
    const goal = {
      id: this.state.id,
      nom: this.state.nom,
      desc: this.state.desc,
      indicateur: this.props.selectedGoal.indicateur,
      strategie: this.state.strategie
    };
    axios
      .put(`http://localhost:8080/goals/${this.state.id}`, goal)
      .then(() => this.setState({ redirect: true }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        <div className="col-10 pt-3 main-panel" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col">
              <span className="text-color-secondary">
                Workspace / {this.props.selectedStrategy.nom} /{" "}
                {this.props.selectedGoal.nom} /{" "}
              </span>
              <span className="text-color-primary">Update Goal</span>
            </div>
          </div>
          <div className="row pt-5 pr-3 mt-5 mb-5 pb-5">
            <div className="col-4" />
            <div className="col-4">
              <form id="process-add-form" onSubmit={this._handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom" className="text-color-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="Process"
                    value={this.state.nom}
                    onChange={event =>
                      this.setState({ nom: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nom" className="text-color-primary">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    placeholder="Process description..."
                    value={this.state.desc}
                    onChange={event =>
                      this.setState({ desc: event.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn primary-btn">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GoalUpdateForm;
