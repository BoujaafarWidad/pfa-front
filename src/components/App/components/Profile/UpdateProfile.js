import React, { Component, Fragment } from "react";
import Header from "../Header";
import SideBar from "./components/SideBar";
import UpdateProfileForm from "./UpdateProfileForm";
import "./assets/css/index.css";

class UpdateProfile extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="profil-update">
          <SideBar />
          <UpdateProfileForm />
        </div>
      </Fragment>
    );
  }
}
export default UpdateProfile;
