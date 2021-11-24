import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";

const Authpage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Authpage;
