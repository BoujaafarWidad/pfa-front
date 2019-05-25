import React, { Component, Fragment } from "react";
import Header from "../Header";
import ProfileForm from "./components/ProfileForm";

class Profile extends Component {
  componentWillMount() {
    document.title = "Profile";
  }
  render() {
    return (
      <Fragment>
        <Header />
        <ProfileForm />
      </Fragment>
    );
  }
}

export default Profile;
