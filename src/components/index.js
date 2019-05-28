import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Home/components/SignIn";
import SignUp from "./Home/components/SignUp";
import App from "./App";
import Strategy from "./App/components/Strategy";
import AddOrganization from "./App/components/Organization/AddOrganization";
import UpdateOrganization from "./App/components/Organization/UpdateOrganization";
import AddStrategy from "./App/components/Organization/AddStrategy";
import Organization from "./App/components/Organization/Organization";
import UpdateStrategy from "./App/components/Strategy/UpdateStrategy";
import NotFound from "./NotFound/index";
import Profile from "./App/components/Profile";
import UpdateProfile from "./App/components/Profile/UpdateProfile";
import Process from "./App/components/Strategy/Process";
import ProcessAdd from "./App/components/Strategy/ProcessAdd";
import ProcessShow from "./App/components/Strategy/ProcessShow";
import ProcessUpdate from "./App/components/Strategy/ProcessUpdate";
import Programs from "./App/components/Strategy/Programs";
import ProgramAdd from "./App/components/Strategy/ProgramAdd";
import ProgramShow from "./App/components/Strategy/ProgramShow";
import Goals from "./App/components/Strategy/Goals";
import GoalAdd from "./App/components/Strategy/GoalAdd";
import GoalShow from "./App/components/Strategy/GoalShow";
import GoalUpdate from "./App/components/Strategy/GoalUpdate";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/app/organizations" component={App} exact />
          <Route path="/app/profile/:idProfile" component={Profile} exact />
          <Route
            path="/app/profile/:idProfile/update"
            component={UpdateProfile}
            exact
          />
          <Route
            path="/app/organizations/new"
            component={AddOrganization}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/update"
            component={UpdateOrganization}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/new"
            component={AddStrategy}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/update"
            component={UpdateStrategy}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/process"
            component={Process}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/process/new"
            component={ProcessAdd}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/process/:idProcess/update"
            component={ProcessUpdate}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/programs"
            component={Programs}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/programs/new"
            component={ProgramAdd}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/programs/:idProgram"
            component={ProgramShow}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/process/:idProcess"
            component={ProcessShow}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/goals/new"
            component={GoalAdd}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/goals/:idGoal/update"
            component={GoalUpdate}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/goals/:idGoal"
            component={GoalShow}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy/goals"
            component={Goals}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization/strategies/:idStrategy"
            component={Strategy}
            exact
          />
          <Route
            path="/app/organizations/:idOrganization"
            component={Organization}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
