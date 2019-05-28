import React, { Component } from "react";
import { connect } from "react-redux";
import user from "./assets/img/user.png";
import "./assets/css/index.css";

class ProfileForm extends Component {
  render() {
    return (
      <div className="col-10 p-3 main-panel" id="main">
        <div className="pt-5 pr-3 pl-3">
          <div class="content-wrapper">
            <div class="content">
              <div class="shadow bg-white border rounded">
                <div class="row no-gutters">
                  <div class="shadow col-lg-12 col-xl-12">
                    <div class="profile-content-left mx-auto text-center">
                      <div class="shadow-sm card text-center widget-profile px-0 border-0">
                        <div class="card-img mx-auto">
                          <img className="img" src={user} alt="user image" />
                        </div>
                        <div class="card-body">
                          <h4 class="py-2 text-dark">{this.props.user.nom}</h4>
                          <p>{this.props.user.email}</p>
                        </div>
                      </div>

                      <div class="contact-info pt-4">
                        <h5 class="info-color  mb-1">Your Informations</h5>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Email address
                        </p>
                        <p>{this.props.user.email}</p>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Phone Number
                        </p>
                        <p>{this.props.user.tel}</p>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Birthday
                        </p>
                        <p>{this.props.user.birthday}</p>
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
