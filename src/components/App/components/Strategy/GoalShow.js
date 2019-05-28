import React, { Component, Fragment } from "react";
import Header from "../Header/index";
import Spinner from "../Spinner";
import SingleGoalShow from "./components/GoalShow";
import axios from "axios";
import Sidebar from "./components/Sidebar";

class GoalShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStrategy: null,
      selectedGoal: null
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
              `http://localhost:8080/goals/${this.props.match.params.idGoal}`
            )
            .then(res =>
              this.setState({ selectedGoal: res.data }, () => {
                document.title = `Workspace - ${this.state.selectedGoal.nom}`;
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
        {(this.state.selectedStrategy && this.state.selectedGoal && (
          <div className="row" id="goal-show">
            <Sidebar
              selected={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              active="goals"
            />
            <SingleGoalShow
              selectedStrategy={this.state.selectedStrategy}
              idSelectedOrganization={this.props.match.params.idOrganization}
              selectedGoal={this.state.selectedGoal}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default GoalShow;
