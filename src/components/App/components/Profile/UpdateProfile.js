import React, { Component, Fragment } from "react";
import Header from "../Header";
import SideBar from "./components/SideBar";
import UpdateProfileForm from "./UpdateProfileForm";

class UpdateProfile extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SideBar />
        <UpdateProfileForm />
      </Fragment>
    );
  }
}
export default UpdateProfile;
