import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Authpage from "./Pages/Auth/AuthPage";
import AppContainer from "./Pages/AppContainer/AppContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path={["/login", "/signup"]}>
          <Authpage />
        </Route>
        <Route exact path={["/dashboard", "/planBirthday", "/restaurants"]}>
          <AppContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
