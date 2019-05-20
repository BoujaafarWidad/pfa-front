import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { connect } from "react-redux";
import { newStrategy } from "../../../../../../redux/actions/strategyActions";
import { Redirect } from "react-router-dom";
import shortId from "shortid";

class AddStrategyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      strategist: "",
      desc: "",
      dateDebut: "",
      dateFin: "",
      organization: this.props.organizations.find(
        ({ id }) => id === this.props.selected
      ),
      redirect: false
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    this.props.newStrategy({
      ...this.state,
      id: shortId.generate()
    });
    this.setState({ redirect: true });
  };

  _handleRedirect = () => {
    if (this.state.redirect && this.state.organization) {
      return (
        <Redirect to={`/app/organizations/${this.state.organization.id}`} />
      );
    }
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        {this.state.organization && (
          <div className="col-9 pt-3" id="main">
            <div className="pr-3 row" id="main-bar">
              <div className="col">
                <span className="text-color-secondary">
                  Workspace / {this.state.organization.nom} /{" "}
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
                  <div className="form-group">
                    <label htmlFor="strategist" className="text-color-primary">
                      Strategist
                    </label>
                    <input
                      type="text"
                      id="strategist"
                      className="form-control"
                      placeholder="John Doe"
                      value={this.state.strategist}
                      onChange={event =>
                        this.setState({ strategist: event.target.value })
                      }
                    />
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
        )}
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
