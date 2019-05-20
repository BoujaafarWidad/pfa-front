import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import Header from "../Header";
import { connect } from "react-redux";
import { fetchAllOrganizations } from "../../../../redux/actions/organizationActions";
import { fetchAllStrategies } from "../../../../redux/actions/strategyActions";
import axios from "axios";

class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentWillMount() {
    document.title = "Workspace";
    axios
      .get(`http://localhost:8080/organisations/owner/${this.props.user.id}`)
      .then(res => this.props.fetchAllOrganizations(res.data))
      .then(
        axios
          .get(`http://localhost:8080/strategies/owner/${this.props.user.id}`)
          .then(res => this.props.fetchAllStrategies(res.data))
          .catch(e => console.log(e))
      )
      .then(this.setState({ render: true }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.render && (
          <div className="row" id="organizations">
            <Sidebar />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  { fetchAllOrganizations, fetchAllStrategies }
)(Organizations);
