import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import SingleProgramShow from "./components/ProgramShow";

class ProgramShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStrategy: null,
      selectedProgram: null
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
              `http://localhost:8080/programs/${
                this.props.match.params.idProgram
              }`
            )
            .then(res =>
              this.setState({ selectedProgram: res.data }, () => {
                document.title = `Workspace - ${
                  this.state.selectedProgram.nom
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
        {(this.state.selectedStrategy && this.state.selectedProgram && (
          <div className="row" id="process-show">
            <Sidebar
              selected={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="process"
            />
            <SingleProgramShow
              selectedStrategy={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              selectedProgram={this.state.selectedProgram}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default ProgramShow;
