import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import OrganizationMain from "./components/OrganizationMain";
import Header from "../Header";
import { connect } from "react-redux";

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1,
      selected: null
    };
  }

  componentWillMount() {
    document.title = "Workspace";
  }

  _fetchSelected = () => {
    if (this.props.match.params.idOrganization !== this.state.selectedId) {
      this.setState({
        selectedId: this.props.match.params.idOrganization,
        selected: this.props.organizations.find(
          ({ id }) => id === Number(this.props.match.params.idOrganization)
        )
      });
    }
  };

  render() {
    this._fetchSelected();
    return (
      <Fragment>
        <Header />
        {this.state.selected && (
          <div className="row" id="organization">
            <Sidebar selected={this.state.selected} update />
            <OrganizationMain selected={this.state.selected} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(Organization);
