import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Home/components/SignIn";
import SignUp from "./Home/components/SignUp";
import App from "./App";

const NotFound = () => <h2>Not Found !</h2>;

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/app" component={App} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
