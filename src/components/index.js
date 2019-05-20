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
import UpdateStrategy from "./App/components/Strategy/UpdateStrategy";

const NotFound = () => <h2>Not Found !</h2>;

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/app/organizations" component={App} exact />
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
            path="/app/organizations/:idOrganization/strategies/:idStrategy"
            component={Strategy}
            exact
          />
          <Route path="" component={UpdateStrategy} exact />
          <Route
            path="app/organizations/:idOrganization/strategies/:idStrategy/update"
            component={UpdateStrategy}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
