import React, { Component, Fragment } from "react";
import UpdateOrganizationForm from "./components/UpdateOrganizationForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";

class UpdateOrganization extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="organization-update">
          <Sidebar />
          <UpdateOrganizationForm />
        </div>
      </Fragment>
    );
  }
}

export default UpdateOrganization;
