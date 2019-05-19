import React, { Component, Fragment } from "react";
import AddOrganizationForm from "./components/AddOrganizationForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";

class AddOrganization extends Component {
  componentWillMount() {
    document.title = "Workspace - New organization";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="organization-add">
          <Sidebar />
          <AddOrganizationForm />
        </div>
      </Fragment>
    );
  }
}

export default AddOrganization;
