import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import OrganizationMain from "./components/OrganizationMain";
import Header from "../Header";

class Organization extends Component {
  componentWillMount() {
    document.title = "Workspace";
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="row" id="organization">
          <Sidebar selected={this.props.match.params.idOrganization} update />
          <OrganizationMain selected={this.props.match.params.idOrganization} />
        </div>
      </Fragment>
    );
  }
}

export default Organization;
