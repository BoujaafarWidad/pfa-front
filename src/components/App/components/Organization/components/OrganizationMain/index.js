import React, { Component } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class OrganizationMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.organizations.find(
        ({ id }) => id === this.props.selected
      )
    };
  }

  render() {
    return (
      <div className="col-9 p-3" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <span className="text-color-secondary">Workspace / </span>
            <span className="text-color-primary">
              {this.state.selected.nom}
            </span>
          </div>
          <div className="col-6 text-right">
            <Link
              className="btn primary-btn"
              to={`/app/organizations/${this.props.selected}/strategies/new`}
            >
              <i className="fas fa-plus mr-3" />
              Add strategy
            </Link>
          </div>
        </div>
        <div className="pt-5 pr-3">
          <div className="card-columns">
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(OrganizationMain);