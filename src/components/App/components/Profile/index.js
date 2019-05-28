import React, { Component, Fragment } from "react";
import Header from "../Header";
import ProfileForm from "./components/ProfileForm";
import SideBar from "./components/SideBar";
import "./assets/css/index.css";

class Profile extends Component {
  componentWillMount() {
    document.title = "Profile";
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="profile">
          <SideBar />
          <ProfileForm />
        </div>
      </Fragment>
    );
  }
}

export default Profile;
