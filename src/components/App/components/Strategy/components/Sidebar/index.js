import React, { Component, Fragment } from "react";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-3 pt-4 pr-0" id="sidebar">
          <div id="sidebar-top">
            <div className="ml-3 mb-3">
              <button className="btn organization-logo">S</button>
              <button className="btn squared-btn text-color-primary pl-2">
                Strategy
              </button>
              <button
                id="add-strategy"
                className="btn squared-btn text-color-primary pl-2"
              >
                <i
                  className="fas fa-plus"
                  data-toggle="modal"
                  data-target="#new-strategy"
                />
              </button>
            </div>
            <hr />
            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">
                <i className="fas fa-eye mr-3" />
                Overview
              </li>
              <li className="list-group-item">
                <i className="fas fa-recycle mr-3" />
                Process
              </li>
              <li className="list-group-item">
                <i className="fas fa-bullseye mr-3" />
                Goals
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-cog mr-3" />
                Settings
              </li>
            </ul>
          </div>
        </div>
        <div
          className="modal fade"
          id="new-strategy"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-color-primary"
                  id="new-strategy"
                >
                  Create new strategy
                </h5>
              </div>
              <div className="modal-body">
                <form id="first-form">
                  <div className="form-group">
                    <label htmlFor="name" className="text-color-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control text-color-primary"
                      id="name"
                      placeholder="Strategy"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name" className="text-color-primary">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      id="description"
                      placeholder="Description..."
                    />
                  </div>

                  <button type="submit" className="btn primary-btn float-right">
                    Finish
                  </button>
                  <div className="cancel-button">
                    <button type="submit" className="btn primary-btn ">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
