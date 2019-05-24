import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import Header from "../Header";
import { connect } from "react-redux";
import { fetchAllOrganizations } from "../../../../redux/actions/organizationActions";
import { fetchAllStrategies } from "../../../../redux/actions/strategyActions";
import { setDataFetched } from "../../../../redux/actions/dataFetchedActions";
import axios from "axios";
import Spinner from "../Spinner";

class Organizations extends Component {
  componentWillMount() {
    document.title = "Workspace - Organizations";
    if (!this.props.dataFetched) {
      axios
        .get(`http://localhost:8080/organisations/owner/${this.props.user.id}`)
        .then(res => this.props.fetchAllOrganizations(res.data))
        .then(() =>
          axios
            .get(`http://localhost:8080/strategies/owner/${this.props.user.id}`)
            .then(res => this.props.fetchAllStrategies(res.data))
            .catch(e => console.log(e))
        )
        .then(() => this.props.setDataFetched())
        .catch(e => console.log(e));
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        {(this.props.dataFetched && (
          <div className="row" id="organizations">
            <Sidebar />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ dataFetched, user }) => ({ dataFetched, user });

export default connect(
  mapStateToProps,
  { fetchAllOrganizations, fetchAllStrategies, setDataFetched }
)(Organizations);
