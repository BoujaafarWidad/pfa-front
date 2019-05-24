import React, { Component, Fragment } from "react";
import UpdateOrganizationForm from "./components/UpdateOrganizationForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";
import { connect } from "react-redux";
import { fetchAllOrganizations } from "../../../../redux/actions/organizationActions";
import { fetchAllStrategies } from "../../../../redux/actions/strategyActions";
import { setDataFetched } from "../../../../redux/actions/dataFetchedActions";
import axios from "axios";
import Spinner from "../Spinner";

class UpdateOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentWillMount() {
    document.title = "Workspace";
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
        .then(() =>
          this.setState(
            {
              selected: this.props.organizations.find(
                ({ id }) =>
                  id === Number(this.props.match.params.idOrganization)
              )
            },
            () =>
              (document.title = `Workspace - ${
                this.state.selected.nom
              } - Update`)
          )
        )
        .catch(e => console.log(e));
    } else {
      this.setState(
        {
          selected: this.props.organizations.find(
            ({ id }) => id === Number(this.props.match.params.idOrganization)
          )
        },
        () =>
          (document.title = `Workspace - ${this.state.selected.nom} - Update`)
      );
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        {(this.state.selected && this.props.dataFetched && (
          <div className="row" id="organization-update">
            <Sidebar selected={this.state.selected} update />
            <UpdateOrganizationForm selected={this.state.selected} />
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
)(UpdateOrganization);
