import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { connect } from "react-redux";
import { newStrategy } from "../../../../../../redux/actions/strategyActions";
import { Redirect } from "react-router-dom";
import axios from "axios";
import shortId from "shortid";

class AddStrategyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      strategeInput: "",
      stratege: {},
      desc: "",
      dateDebut: "",
      dateFin: "",
      redirect: false,
      fetchingSuggestions: false,
      suggestedStrategists: []
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    const strategy = {
      nom: this.state.nom,
      stratege: this.state.stratege,
      desc: this.state.desc,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      organisation: this.props.selected
    };
    axios
      .post("http://localhost:8080/strategies", strategy)
      .then(res => this.props.newStrategy(res.data))
      .then(this.setState({ redirect: true }))
      .catch(e => console.log(e));
  };

  _handleRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/app/organizations/${this.props.selected.id}`} />;
    }
  };

  _handleStrategistInputChange = event => {
    this.setState(
      { strategeInput: event.target.value, fetchingSuggestions: true },
      () => {
        if (this.state.strategeInput.length !== 0) {
          axios
            .get(
              `http://localhost:8080/utilisateurs/nom/${
                this.state.strategeInput
              }`
            )
            .then(res => this.setState({ suggestedStrategists: res.data }))
            .then(this.setState({ fetchingSuggestions: false }))
            .catch(e => console.log(e));
        } else {
          this.setState({
            suggestedStrategists: [],
            fetchingSuggestions: false
          });
        }
      }
    );
  };

  _handleSuggestionClick = idx => {
    this.setState(
      {
        stratege: this.state.suggestedStrategists[idx],
        strategeInput: this.state.suggestedStrategists[idx].nom
      },
      () => {
        this.setState({ suggestedStrategists: [] });
      }
    );
  };

  _renderUserSuggestion = ({ nom }, idx) => (
    <li
      className="list-group-item list-group-item-action"
      key={shortId.generate()}
      onClick={() => this._handleSuggestionClick(idx)}
    >
      {nom}
    </li>
  );

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        <div className="col-9 pt-3 main-panel" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col">
              <span className="text-color-secondary">
                Workspace / {this.props.selected.nom} /{" "}
              </span>
              <span className="text-color-primary">New strategy</span>
            </div>
          </div>
          <div className="row pt-5 pr-3 mt-5 mb-5 pb-5">
            <div className="col-3" />
            <div className="col-6">
              <form
                id="strategy-add-form"
                autoComplete="off"
                onSubmit={this._handleSubmit}
              >
                <input
                  autoComplete="false"
                  name="hidden"
                  type="text"
                  style={{ display: "none" }}
                />
                <div className="form-group">
                  <label htmlFor="nom" className="text-color-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="Marketing Mix"
                    value={this.state.nom}
                    onChange={event =>
                      this.setState({ nom: event.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stratege" className="text-color-primary">
                    Strategist
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="stratege"
                      className="form-control"
                      placeholder="John Doe"
                      aria-label="John Doe"
                      aria-describedby="users-loading-spinner"
                      value={this.state.strategeInput}
                      onChange={this._handleStrategistInputChange}
                    />
                    {this.state.fetchingSuggestions && (
                      <div className="input-group-append">
                        <span
                          className="input-group-text"
                          id="users-loading-spinner"
                        >
                          <div className="spinner-border spinner-border-sm" />
                        </span>
                      </div>
                    )}
                  </div>
                  <ul className="list-group" id="strategist-suggestion">
                    {this.state.suggestedStrategists.map(
                      this._renderUserSuggestion
                    )}
                  </ul>
                </div>
                <div className="form-group">
                  <label htmlFor="start-date" className="text-color-primary">
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
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    placeholder="The marketing mix can be divided into four groups of variables commonly known as the four Ps."
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
      </Fragment>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(
  mapStateToProps,
  {
    newStrategy
  }
)(AddStrategyForm);
