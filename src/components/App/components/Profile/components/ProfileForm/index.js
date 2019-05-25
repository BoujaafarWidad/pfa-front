import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      profileState: "active",
      organizationsState: ""
    };
  }

  _handleOrganizationsClick = e => {
    e.preventDefault();
    this.setState({ index: 1, organizationsState: "active", profileState: "" });
  };

  _handleProfileClick = e => {
    e.preventDefault();
    this.setState({ index: 0, organizationsState: "", profileState: "active" });
  };

  render() {
    const profile = (
      <div className="card-body">
        <h5 className="card-title col-3">John Doe</h5>
        <div className="col-3 text-color-primary">Mail: John.Doe@gmail.com</div>
        <div className="col-3 text-color-primary">Tel: +21234566778</div>
        <button type="submit" className="edit_profile btn primary-btn">
          Edit profile
        </button>
      </div>
    );
    const organizations = (
      <ul className="list-group-flush max-width p-3">
        <li className="list-group-item">
          <div className="float-left">
            <div>
              <div className="float-right ml-2">
                <h5 className="mb-0">Organization</h5>
                <div className="text-muted text-xs mt-2 ml-0">description</div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </li>
        <li className="list-group-item">
          <div className="float-left">
            <div>
              <div className="float-right ml-2">
                <h5 className="mb-0">Organization</h5>
                <div className="text-muted text-xs mt-2 ml-0">description</div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </li>
      </ul>
    );

    return (
      <div className="container">
        <div className="card mb-6">
          <img
            className="card-img-top "
            src="https://www.htmlcsscolor.com/preview/gallery/6A6C6E.png"
            alt="Card image cap"
          />
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link ${this.state.profileState}`}
                  to="./"
                  onClick={this._handleProfileClick}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${this.state.organizationsState}`}
                  to="#"
                  onClick={this._handleOrganizationsClick}
                >
                  Organizations
                </Link>
              </li>
            </ul>
          </div>
          {this.state.index === 0 && profile}
          {this.state.index === 1 && organizations}
        </div>
      </div>
    );
  }
}
export default ProfileForm;
