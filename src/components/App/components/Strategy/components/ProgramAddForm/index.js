import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import Spinner from "../../../Spinner/index";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class ProgramAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      desc: "",
      coef: 1,
      dateDebut: "",
      dateFin: "",
      process: null,
      processOptions: null,
      goal: null,
      goalOptions: null,
      redirect: false
    };
  }

  componentWillMount() {
    axios
      .get(`http://localhost:8080/process/strategy/${this.props.selected.id}`)
      .then(res =>
        this.setState({ processOptions: this._toOptions(res.data) }, () =>
          axios
            .get(
              `http://localhost:8080/goals/strategy/${this.props.selected.id}`
            )
            .then(res =>
              this.setState({ goalOptions: this._toOptions(res.data) })
            )
            .catch(e => console.log(e))
        )
      )
      .catch(e => console.log(e));
  }

  _toOptions = arr =>
    arr.map(e => ({
      label: e.nom,
      value: e.nom,
      data: e
    }));

  _handleRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={`/app/organizations/${
            this.props.idSelectedOrganization
          }/strategies/${this.props.selected.id}/programs`}
        />
      );
    }
  };

  _handleSubmit = event => {
    event.preventDefault();
    const program = {
      nom: this.state.nom,
      desc: this.state.desc,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      indicateur: 0,
      coef: this.state.coef,
      processus: this.state.process.data,
      objectif: this.state.goal.data
    };
    axios
      .post("http://localhost:8080/programs", program)
      .then(() => this.setState({ redirect: true }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        {(this.state.processOptions !== null &&
          this.state.goalOptions != null && (
            <div className="col-10 pt-3 main-panel" id="main">
              <div className="pr-3 row" id="main-bar">
                <div className="col">
                  <span className="text-color-secondary">
                    Workspace / {this.props.selected.nom} /{" "}
                  </span>
                  <span className="text-color-primary">New Program</span>
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
                        placeholder="Program"
                        value={this.state.nom}
                        onChange={event =>
                          this.setState({ nom: event.target.value })
                        }
                      />
                    </div>
                    <div className="form-group select-in-program">
                      <label htmlFor="process" className="text-color-primary">
                        Process
                      </label>
                      <Select
                        value={this.state.process}
                        onChange={selected => {
                          this.setState({ process: selected });
                        }}
                        options={this.state.processOptions}
                        id="process"
                      />
                    </div>
                    <div className="form-group select-in-program">
                      <label htmlFor="goal" className="text-color-primary">
                        Goal
                      </label>
                      <Select
                        value={this.state.goal}
                        onChange={selected => {
                          this.setState({ goal: selected });
                        }}
                        options={this.state.goalOptions}
                        id="goal"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="coef" className="text-color-primary">
                        Coefficient
                      </label>
                      <div className="mt-3 mb-4">
                        <InputRange
                          maxValue={10}
                          minValue={1}
                          value={this.state.coef}
                          onChange={coef => this.setState({ coef })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="start-date"
                        className="text-color-primary"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        id="start-date"
                        className="form-control"
                        value={this.state.dateDebut}
                        onChange={event =>
                          this.setState({ dateDebut: event.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="end-date" className="text-color-primary">
                        End date
                      </label>
                      <input
                        type="date"
                        id="end-date"
                        className="form-control"
                        value={this.state.dateFin}
                        onChange={event =>
                          this.setState({ dateFin: event.target.value })
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
                        placeholder="Program description..."
                        value={this.state.desc}
                        onChange={event =>
                          this.setState({ desc: event.target.value })
                        }
                      />
                    </div>
                    <button type="submit" className="btn primary-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )) || <Spinner />}
      </Fragment>
    );
  }
}

export default ProgramAddForm;
