import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import GoalsList from "./components/GoalsList/index";

class Goals extends Component {
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
          document.title = `Workspace - ${this.state.selected.nom} - Goals`;
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Fragment>
        <Header />
        {(this.state.selected && (
          <div className="row" id="strategy-goals">
            <Sidebar
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="goals"
            />
            <GoalsList
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default Goals;
