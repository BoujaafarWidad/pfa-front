import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import Sidebar from "./components/Sidebar";
import OrganizationMain from "./components/OrganizationMain";
import Header from "../Header";
import { connect } from "react-redux";
import { fetchAllOrganizations } from "../../../../redux/actions/organizationActions";
import { fetchAllStrategies } from "../../../../redux/actions/strategyActions";
import { setDataFetched } from "../../../../redux/actions/dataFetchedActions";
import axios from "axios";
import Spinner from "../Spinner";

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1,
      selected: null
    };
  }

  componentWillMount() {
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

  _fetchSelected = () => {
    if (this.props.match.params.idOrganization !== this.state.selectedId) {
      this.setState(
        {
          selectedId: this.props.match.params.idOrganization,
          selected: this.props.organizations.find(
            ({ id }) => id === Number(this.props.match.params.idOrganization)
          )
        },
        () => (document.title = `Workspace - ${this.state.selected.nom}`)
      );
    }
  };

  render() {
    if (this.props.dataFetched) {
      this._fetchSelected();
    }
    return (
      <Fragment>
        <Header />
        {(this.state.selected && (
          <div className="row" id="organization">
            <Sidebar selected={this.state.selected} update />
            <OrganizationMain selected={this.state.selected} />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ dataFetched, user, organizations }) => ({
  dataFetched,
  user,
  organizations
});

export default connect(
  mapStateToProps,
  { fetchAllOrganizations, fetchAllStrategies, setDataFetched }
)(Organization);
