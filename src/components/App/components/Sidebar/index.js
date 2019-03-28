import React, { Component } from "react";
import "./assets/css/index.css";

class Sidebar extends Component {
  render() {
    return (
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
              <i className="fas fa-plus mr-3" />
              New Organization
            </li>
            <li className="list-group-item">
              <i className="fas fa-cog mr-3" />
              Organization Settings
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
