import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import ProcessList from "./components/ProcessList/index";
import axios from "axios";
import Sidebar from "./components/Sidebar";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentWillMount() {
    axios
      .get(
        `http://localhost:8080/strategies/${this.props.match.params.idStrategy}`
      )
      .then(res => {
        this.setState({ selected: res.data }, () => {
          document.title = `Workspace - ${this.state.selected.nom} - Process`;
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Fragment>
        <Header />
        {(this.state.selected && (
          <div className="row" id="strategy-process">
            <Sidebar
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="process"
            />
            <ProcessList
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default Process;
