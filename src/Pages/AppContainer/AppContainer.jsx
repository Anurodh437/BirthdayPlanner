import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact/Contact";

import Restaurants from "./Restaurants/Restaurants";
import Details from "./Details/Details";
const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
        <Route exact path="/planBirthday">
          <Details />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppContainer;
