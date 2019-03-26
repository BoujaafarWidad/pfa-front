import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const NotFound = () => <h2>Not Found !</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
