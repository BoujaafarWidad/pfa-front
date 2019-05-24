import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { Redirect } from "react-router-dom";
import shortId from "shortid";
import axios from "axios";
import { connect } from "react-redux";
import { updateStrategy } from "../../../../../../redux/actions/strategyActions";

class UpdateStrategyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.selected.id,
      nom: this.props.selected.nom,
      strategeInput: this.props.selected.stratege.nom,
      stratege: this.props.selected.stratege,
      desc: this.props.selected.desc,
      dateDebut: this.props.selected.dateDebut,
      dateFin: this.props.selected.dateFin,
      organisation: this.props.selected.organisation,
      swot: this.props.selected.swot,
      sItems: this.props.selected.swot.sItems,
      wItems: this.props.selected.swot.wItems,
      oItems: this.props.selected.swot.oItems,
      tItems: this.props.selected.swot.tItems,
      sItemInput: "",
      wItemInput: "",
      oItemInput: "",
      tItemInput: "",
      sItemAdd: false,
      wItemAdd: false,
      oItemAdd: false,
      tItemAdd: false,
      redirect: false,
      fetchingSuggestions: false,
      suggestedStrategists: []
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    const strategy = {
      id: this.state.id,
      nom: this.state.nom,
      stratege: this.state.stratege,
      desc: this.state.desc,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      organisation: this.state.selected,
      swot: this._getSWOT(this.state.swot)
    };
    axios
      .put(`http://localhost:8080/strategies/${this.state.id}`, strategy)
      .then(res => this.props.updateStrategy(res.data))
      .then(() => this.setState({ redirect: true }))
      .catch(e => console.log(e));
  };

  _getSWOT = ({ id }) => ({
    id,
    s: this._joinItems(this.state.sItems),
    w: this._joinItems(this.state.wItems),
    o: this._joinItems(this.state.oItems),
    t: this._joinItems(this.state.tItems)
  });

  _joinItems = items => items.join("___special#separator___");

  _handleRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={`/app/organizations/${this.state.organisation.id}/strategies/${
            this.state.id
          }`}
        />
      );
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

  _renderSWOTItem = item => <li key={shortId.generate()}>{item}</li>;

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
              <span className="text-color-primary">Update strategy</span>
            </div>
          </div>
          <div className="pt-5 pr-3 mt-2 mb-5 pb-5">
            <form
              id="strategy-update-form"
              autoComplete="off"
              onSubmit={this._handleSubmit}
            >
              <div className="row">
                <div className="col-3 text-color-primary">
                  <label htmlFor="nom" className="text-color-primary">
                    Name
                  </label>
                </div>
                <div className="col-4 text-color-secondary">
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
              </div>
              <div className="row mt-5">
                <div className="col-3 text-color-primary">
                  <label htmlFor="stratege" className="text-color-primary">
                    Strategist
                  </label>
                </div>
                <div className="col-4 text-color-secondary">
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
              </div>
              <div className="row mt-5">
                <div className="col-3 text-color-primary">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="col-4 text-color-secondary">
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
              </div>
              <div className="row mt-5">
                <div className="col-3 text-color-primary">Period</div>
                <div className="col-9 text-color-secondary">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label
                            htmlFor="start-date"
                            className="text-color-primary"
                          >
                            Start date
                          </label>
                        </td>
                        <td className="text-color-primary pl-5">
                          <input
                            type="date"
                            id="start-date"
                            className="form-control"
                            value={this.state.dateDebut}
                            onChange={event =>
                              this.setState({ dateDebut: event.target.value })
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          <label
                            htmlFor="end-date"
                            className="text-color-primary"
                          >
                            End date
                          </label>
                        </td>
                        <td className="text-color-primary pl-5">
                          <input
                            type="date"
                            id="end-date"
                            className="form-control"
                            value={this.state.dateFin}
                            onChange={event =>
                              this.setState({ dateFin: event.target.value })
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3 text-color-primary">SWOT</div>
                <div id="swot" className="col-9 text-color-primary">
                  <div className="row" id="swot-matrix">
                    <div className="col">
                      <div className="swot-header swot-header-s">S</div>
                      <div className="swot-body swot-body-s">
                        <ul>{this.state.sItems.map(this._renderSWOTItem)}</ul>
                        {(this.state.sItemAdd && (
                          <div className="mb-3">
                            <textarea
                              className="form-control mb-2"
                              rows="2"
                              placeholder="Item content..."
                              value={this.state.sItemInput}
                              onChange={event =>
                                this.setState({
                                  sItemInput: event.target.value
                                })
                              }
                            />
                            <button
                              className="primary-btn mr-2"
                              onClick={event => {
                                event.preventDefault();
                                this.setState(
                                  {
                                    sItems: [
                                      ...this.state.sItems,
                                      this.state.sItemInput
                                    ]
                                  },
                                  () =>
                                    this.setState({
                                      sItemInput: "",
                                      sItemAdd: false
                                    })
                                );
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="primary-btn"
                              onClick={() =>
                                this.setState({
                                  sItemInput: "",
                                  sItemAdd: false
                                })
                              }
                            >
                              Cancel
                            </button>
                          </div>
                        )) || (
                          <span
                            className="primary-link"
                            onClick={() => this.setState({ sItemAdd: true })}
                          >
                            <i className="fas fa-plus mr-2" />
                            Add item
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="swot-header swot-header-w">W</div>
                      <div className="swot-body swot-body-w">
                        <ul>{this.state.wItems.map(this._renderSWOTItem)}</ul>
                        {(this.state.wItemAdd && (
                          <div className="mb-3">
                            <textarea
                              className="form-control mb-2"
                              rows="2"
                              placeholder="Item content..."
                              value={this.state.wItemInput}
                              onChange={event =>
                                this.setState({
                                  wItemInput: event.target.value
                                })
                              }
                            />
                            <button
                              className="primary-btn mr-2"
                              onClick={event => {
                                event.preventDefault();
                                this.setState(
                                  {
                                    wItems: [
                                      ...this.state.wItems,
                                      this.state.wItemInput
                                    ]
                                  },
                                  () =>
                                    this.setState({
                                      wItemInput: "",
                                      wItemAdd: false
                                    })
                                );
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="primary-btn"
                              onClick={() =>
                                this.setState({
                                  wItemInput: "",
                                  wItemAdd: false
                                })
                              }
                            >
                              Cancel
                            </button>
                          </div>
                        )) || (
                          <span
                            className="primary-link"
                            onClick={() => this.setState({ wItemAdd: true })}
                          >
                            <i className="fas fa-plus mr-2" />
                            Add item
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="swot-header swot-header-o">O</div>
                      <div className="swot-body swot-body-o">
                        <ul>{this.state.oItems.map(this._renderSWOTItem)}</ul>
                        {(this.state.oItemAdd && (
                          <div className="mb-3">
                            <textarea
                              className="form-control mb-2"
                              rows="2"
                              placeholder="Item content..."
                              value={this.state.oItemInput}
                              onChange={event =>
                                this.setState({
                                  oItemInput: event.target.value
                                })
                              }
                            />
                            <button
                              className="primary-btn mr-2"
                              onClick={event => {
                                event.preventDefault();
                                this.setState(
                                  {
                                    oItems: [
                                      ...this.state.oItems,
                                      this.state.oItemInput
                                    ]
                                  },
                                  () =>
                                    this.setState({
                                      oItemInput: "",
                                      oItemAdd: false
                                    })
                                );
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="primary-btn"
                              onClick={() =>
                                this.setState({
                                  oItemInput: "",
                                  oItemAdd: false
                                })
                              }
                            >
                              Cancel
                            </button>
                          </div>
                        )) || (
                          <span
                            className="primary-link"
                            onClick={() => this.setState({ oItemAdd: true })}
                          >
                            <i className="fas fa-plus mr-2" />
                            Add item
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="swot-header swot-header-t">T</div>
                      <div className="swot-body swot-body-t">
                        <ul>{this.state.tItems.map(this._renderSWOTItem)}</ul>
                        {(this.state.tItemAdd && (
                          <div className="mb-3">
                            <textarea
                              className="form-control mb-2"
                              rows="2"
                              placeholder="Item content..."
                              value={this.state.tItemInput}
                              onChange={event =>
                                this.setState({
                                  tItemInput: event.target.value
                                })
                              }
                            />
                            <button
                              className="primary-btn mr-2"
                              onClick={event => {
                                event.preventDefault();
                                this.setState(
                                  {
                                    tItems: [
                                      ...this.state.tItems,
                                      this.state.tItemInput
                                    ]
                                  },
                                  () =>
                                    this.setState({
                                      tItemInput: "",
                                      tItemAdd: false
                                    })
                                );
                              }}
                            >
                              Add
                            </button>
                            <button
                              className="primary-btn"
                              onClick={() =>
                                this.setState({
                                  tItemInput: "",
                                  tItemAdd: false
                                })
                              }
                            >
                              Cancel
                            </button>
                          </div>
                        )) || (
                          <span
                            className="primary-link"
                            onClick={() => this.setState({ tItemAdd: true })}
                          >
                            <i className="fas fa-plus mr-2" />
                            Add item
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3 text-color-primary" />
                <div className="col-4 text-color-secondary">
                  <button type="submit" className="btn primary-btn">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  {
    updateStrategy
  }
)(UpdateStrategyForm);
