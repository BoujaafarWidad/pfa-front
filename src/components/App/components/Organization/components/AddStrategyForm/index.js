import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { connect } from "react-redux";
import { newStrategy } from "../../../../../../redux/actions/strategyActions";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddStrategyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      stratege: "",
      desc: "",
      dateDebut: "",
      dateFin: "",
      redirect: false
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    const strategy = {
      nom: this.state.nom,
      desc: this.state.desc,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin,
      organisation: this.props.selected
    };
    axios
      .get(`http://localhost:8080/utilisateurs/nom/${this.state.stratege}`)
      .then(res => {
        console.log({
          ...strategy,
          stratege: res.data
        });
        axios
          .post("http://localhost:8080/strategies", {
            ...strategy,
            stratege: res.data
          })
          .then(res => this.props.newStrategy(res.data))
          .then(this.setState({ redirect: true }))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  };

  _handleRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/app/organizations/${this.props.selected.id}`} />;
    }
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        <div className="col-9 pt-3" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col">
              <span className="text-color-secondary">
                Workspace / {this.props.selected.nom} /{" "}
              </span>
              <span className="text-color-primary">New strategy</span>
            </div>
          </div>
          <div className="row pt-5 pr-3 mt-5">
            <div className="col-3" />
            <div className="col-6">
              <form id="strategy-add-form" onSubmit={this._handleSubmit}>
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
                  <div class="input-group">
                    <input
                      type="text"
                      id="stratege"
                      class="form-control"
                      placeholder="John Doe"
                      aria-label="John Doe"
                      aria-describedby="users-loading-spinner"
                      value={this.state.stratege}
                      onChange={event =>
                        this.setState({ stratege: event.target.value })
                      }
                    />
                    <div class="input-group-append">
                      <span class="input-group-text" id="users-loading-spinner">
                        <div class="spinner-border spinner-border-sm" />
                      </span>
                    </div>
                  </div>
                  <ul className="list-group" id="strategist-suggestion">
                    <li className="list-group-item list-group-item-action">
                      1
                    </li>
                    <li className="list-group-item list-group-item-action">
                      1
                    </li>
                    <li className="list-group-item list-group-item-action">
                      1
                    </li>
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
                    rows="3"
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
