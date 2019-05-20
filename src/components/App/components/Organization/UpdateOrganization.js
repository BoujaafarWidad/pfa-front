import React, { Component, Fragment } from "react";
import UpdateOrganizationForm from "./components/UpdateOrganizationForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";
import { connect } from "react-redux";

class UpdateOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentWillMount() {
    document.title = "Workspace";
    this.setState({
      selected: this.props.organizations.find(
        ({ id }) => id === Number(this.props.match.params.idOrganization)
      )
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.selected && (
          <div className="row" id="organization-update">
            <Sidebar selected={this.state.selected} update />
            <UpdateOrganizationForm selected={this.state.selected} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(UpdateOrganization);
