import React, { Component, Fragment } from "react";
import Header from "../Header";
import ProfileForm from "./components/ProfileForm";
import SideBar from "./components/SideBar";

class Profile extends Component {
  componentWillMount() {
    document.title = "Profile";
  }
  render() {
    return (
      <Fragment>
        <Header />
        <SideBar />
        <ProfileForm />
      </Fragment>
    );
  }
}

export default Profile;
