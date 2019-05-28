import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import ProcessUpdateForm from "./components/ProcessUpdateForm/index";

class ProcessUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStrategy: null,
      selectedProcess: null
    };
  }

  componentWillMount() {
    axios
      .get(
        `http://localhost:8080/strategies/${this.props.match.params.idStrategy}`
      )
      .then(res =>
        this.setState({ selectedStrategy: res.data }, () =>
          axios
            .get(
              `http://localhost:8080/process/${
                this.props.match.params.idProcess
              }`
            )
            .then(res => this.setState({ selectedProcess: res.data }))
            .catch(e => console.log(e))
        )
      )
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Fragment>
        <Header />
        {(this.state.selectedStrategy && this.state.selectedProcess && (
          <div className="row" id="strategy-process">
            <Sidebar
              selected={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="process"
            />
            <ProcessUpdateForm
              selectedStrategy={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              selectedProcess={this.state.selectedProcess}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default ProcessUpdate;
