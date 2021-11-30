import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "./Contact/Contact";
import Restaurants from "./Restaurants/Restaurants";
import Details from "./Details/Details";
import Gifts from "./Gifts/Gifts";
import Testimonial from "./Testimonial/Testimonial";
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
        <Route
          exact
          path={["/gifts", "/gifts/mugs", "/gifts/bouquet", "/gifts/bdaykit"]}
        >
          <Gifts />
        </Route>
        <Route exact path="/planBirthday">
          <Details />
        </Route>
        <Route exact path="/feedback">
          <Contact />
        </Route>
        <Route exact path="/testimonials">
          <Testimonial />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppContainer;
