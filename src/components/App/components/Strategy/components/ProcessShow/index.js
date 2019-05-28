import React, { Component } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import Spinner from "../../../Spinner/index";
import axios from "axios";

class ProcessShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: null
    };
  }

  componentWillMount() {
    axios
      .get(
        `http://localhost:8080/programs/process/${
          this.props.selectedProcess.id
        }`
      )
      .then(res => this.setState({ programs: res.data }))
      .catch(e => console.log(e));
  }

  _renderProgram = ({ objectif, id, nom }) => (
    <tr>
      <td className="text-color-secondary">{objectif.nom}</td>
      <td className="text-color-secondary">
        <Link
          className="secondary-link"
          to={`/app/organizations/${
            this.props.idSelectedOrganization
          }/strategies/${this.props.selectedStrategy.id}/programs/${id}`}
        >
          {nom}
        </Link>
      </td>
    </tr>
  );

  render() {
    return (
      (this.state.programs && (
        <div className="col-10 p-3 main-panel" id="main">
          <div className="row pr-3" id="main-bar">
            <div className="col-6 text-left">
              <span className="text-color-secondary">
                Strategy / {this.props.selectedStrategy.nom} / Process /{" "}
                {this.props.selectedProcess.nom} /{" "}
              </span>
              <span className="text-color-primary">Overview</span>
            </div>
            <div className="col-6 text-right">
              <Link
                className="btn primary-btn"
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selectedStrategy.id}/process/${
                  this.props.selectedProcess.id
                }/update`}
              >
                <i className="fas fa-edit mr-3" />
                Update process
              </Link>
            </div>
          </div>
          <div className="pt-5 pr-3 pl-3">
            <div className="row">
              <div className="col-3 text-color-primary">Name</div>
              <div className="col-9 text-color-secondary">
                {this.props.selectedProcess.nom}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-3 text-color-primary">Description</div>
              <div className="col-9 text-color-secondary">
                {this.props.selectedProcess.desc}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-3 text-color-primary">Programs</div>
              <div className="col-5 text-color-secondary">
                {(this.state.programs.length > 0 && (
                  <div className="table-responsive">
                    <table className="table" id="program-process-table">
                      <thead>
                        <tr>
                          <th scope="col" className="text-color-primary">
                            Goal
                          </th>
                          <th scope="col" className="text-color-primary">
                            Program
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.programs.map(this._renderProgram)}
                      </tbody>
                    </table>
                  </div>
                )) || (
                  <span className="text-color-secondary">
                    No program exists for this process. You can add them.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )) || <Spinner />
    );
  }
}

export default ProcessShow;
