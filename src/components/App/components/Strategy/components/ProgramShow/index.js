import React, { Component } from "react";
import "./assets/css/index.css";
import { Link } from "react-router-dom";
import Spinner from "../../../Spinner/index";

class ProgramShow extends Component {
  render() {
    return (
      <div className="col-10 p-3 main-panel" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <span className="text-color-secondary">
              Strategy / {this.props.selectedStrategy.nom} / Program /{" "}
              {this.props.selectedProgram.nom} /{" "}
            </span>
            <span className="text-color-primary">Overview</span>
          </div>
          <div className="col-6 text-right">
            <Link
              className="btn primary-btn"
              to={`/app/organizations/${
                this.props.idSelectedOrganization
              }/strategies/${this.props.selectedStrategy.id}/program/${
                this.props.selectedProgram.id
              }/update`}
            >
              <i className="fas fa-edit mr-3" />
              Update program
            </Link>
          </div>
        </div>
        <div className="pt-5 pr-3 pl-3">
          <div className="row">
            <div className="col-3 text-color-primary">Name</div>
            <div className="col-9 text-color-secondary">
              {this.props.selectedProgram.nom}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Process</div>
            <div className="col-9 text-color-secondary">
              <Link
                className="secondary-link"
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selectedStrategy.id}/process/${
                  this.props.selectedProgram.processus.id
                }`}
              >
                {this.props.selectedProgram.processus.nom}
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Goal</div>
            <div className="col-9 text-color-secondary">
              <Link
                className="secondary-link"
                to={`/app/organizations/${
                  this.props.idSelectedOrganization
                }/strategies/${this.props.selectedStrategy.id}/goals/${
                  this.props.selectedProgram.objectif.id
                }`}
              >
                {this.props.selectedProgram.objectif.nom}
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Coefficient</div>
            <div className="col-9 text-color-secondary">
              {this.props.selectedProgram.coef} / 10
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Indicator</div>
            <div className="col-9 text-color-secondary">
              {this.props.selectedProgram.indicateur} %
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Period</div>
            <div className="col-9 text-color-secondary">
              <table>
                <tbody>
                  <tr>
                    <td>From</td>
                    <td className="text-color-primary pl-5">
                      {this.props.selectedProgram.dateDebut}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">To</td>
                    <td className="text-color-primary pl-5">
                      {this.props.selectedProgram.dateFin}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Description</div>
            <div className="col-9 text-color-secondary">
              {this.props.selectedProgram.desc}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramShow;
