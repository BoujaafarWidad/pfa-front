import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import SignleProcessShow from "./components/ProcessShow";
import axios from "axios";
import Sidebar from "./components/Sidebar";

class ProcessShow extends Component {
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
            .then(res =>
              this.setState({ selectedProcess: res.data }, () => {
                document.title = `Workspace - ${
                  this.state.selectedProcess.nom
                }`;
              })
            )
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
          <div className="row" id="process-show">
            <Sidebar
              selected={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="process"
            />
            <SignleProcessShow
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

export default ProcessShow;
