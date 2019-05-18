import React, { Component, Fragment } from "react";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-3 pt-4" id="sidebar">
          <div id="sidebar-top">
            <h4 className="text-color-primary mb-4 pl-3">My Organizations</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item active-organization">
                <button className="btn organization-logo">O</button>
                <button className="btn squared-btn">Organization</button>
              </li>
              <li className="list-group-item">
                <button className="btn organization-logo">F</button>
                <button className="btn squared-btn">Foundation</button>
              </li>
            </ul>
          </div>
          <div id="sidebar-bottom">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i
                  className="fas fa-plus mr-3"
                  data-toggle="modal"
                  data-target="#new-organization"
                />
                New Organization
              </li>
              <li className="list-group-item">
                <i className="fas fa-cog mr-3" />
                Organization Settings
              </li>
            </ul>
          </div>
        </div>
        <div
          className="modal fade"
          id="new-organization"
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
                  id="new-organization"
                >
                  Create new organization
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
                      placeholder="Organization"
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
                    Cancel
                  </button>
                  <div className="finish-button">
                    <button type="submit" className="btn primary-btn ">
                      Finish
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
