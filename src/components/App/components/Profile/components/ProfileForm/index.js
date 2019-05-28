import React, { Component } from "react";
import { connect } from "react-redux";
import user from "./assets/img/user.png";
import "./assets/css/index.css";

class ProfileForm extends Component {
  render() {
    return (
      <div className="col-10 p-3 main-panel" id="main">
        <div className="pt-5 pr-3 pl-3">
          <div className="content-wrapper">
            <div className="content">
              <div className="shadow bg-white border rounded">
                <div className="row no-gutters">
                  <div className="shadow col-lg-12 col-xl-12">
                    <div className="profile-content-left mx-auto text-center">
                      <div className="shadow-sm card text-center widget-profile px-0 border-0">
                        <div className="card-img mx-auto">
                          <img className="img" src={user} alt="user" />
                        </div>
                        <div className="card-body">
                          <h4 className="py-2 text-dark">
                            {this.props.user.nom}
                          </h4>
                          <p>{this.props.user.email}</p>
                        </div>
                      </div>

                      <div className="contact-info pt-4">
                        <h5 className="info-color  mb-1">Your Informations</h5>
                        <p className="text-color-primary pt-4 mb-2">
                          Email address
                        </p>
                        <p className="text-color-secondary">
                          {this.props.user.email}
                        </p>
                        <p className="text-color-primary pt-4 mb-2">
                          Phone Number
                        </p>
                        <p className="text-color-secondary">
                          {this.props.user.tel}
                        </p>
                        <p className="text-color-primary pt-4 mb-2">Birthday</p>
                        <p className="text-color-secondary">
                          {this.props.user.birthday}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user, organizations }) => ({ user, organizations });

export default connect(mapStateToProps)(ProfileForm);
