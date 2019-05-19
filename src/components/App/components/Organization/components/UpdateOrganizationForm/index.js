import React, { Component } from "react";
import "./assets/css/index.css";

class UpdateOrganizationForm extends Component {
  render() {
    return (
      <div className="col-9 pt-3" id="main">
        <div className="pr-3 row" id="main-bar">
          <div className="col">
            <span className="text-color-secondary">
              Workspace / Organization /{" "}
            </span>
            <span className="text-color-primary">Update organization</span>
          </div>
        </div>
        <div className="row pt-5 pr-3 mt-5">
          <div className="col-3" />
          <div className="col-6">
            <form id="organization-update-form">
              <div className="form-group">
                <label htmlFor="nom" className="text-color-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  placeholder="Akatsuki"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="text-color-primary">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control text-color-secondary"
                  placeholder="+1-541-754-3010"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="text-color-primary">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control text-color-secondary"
                  placeholder="445 Mount Eden Road, Mount Eden, Auckland."
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="A group of shinobi that existed outside the usual system of hidden villages."
                />
              </div>
              <button type="submit" className="btn primary-btn">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateOrganizationForm;
