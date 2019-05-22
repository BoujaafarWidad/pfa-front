import React, { Component } from "react";
import "./assets/css/index.css";

class UpdateStrategyForm extends Component {
  render() {
    return (
      <div className="col-9 pt-3" id="main">
        <div className="pr-3 row" id="main-bar">
          <div className="col">
            <span className="text-color-secondary">
              Workspace / Organization /{" "}
            </span>
            <span className="text-color-primary">Update strategy</span>
          </div>
        </div>
        <div className="row pt-5 pr-3 mt-2">
          <div className="col-3" />
          <div className="col-6">
            <form id="strategy-add-form">
              <div className="form-group">
                <label htmlFor="nom" className="text-color-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  placeholder="Marketing Mix"
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="start-date" className="text-color-primary">
                  Start date
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="form-control text-color-secondary"
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-date" className="text-color-primary">
                  End date
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="form-control text-color-secondary"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="The marketing mix can be divided into four groups of variables commonly known as the four Ps."
                />
              </div>
              <button type="submit" className="btn primary-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStrategyForm;
