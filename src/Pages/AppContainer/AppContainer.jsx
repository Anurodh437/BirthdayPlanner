import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/planBirthday">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppContainer;
