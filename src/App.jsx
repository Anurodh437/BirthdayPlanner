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
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path={["/login", "/signup"]}>
            <Authpage />
          </Route>
          <Route exact path={["/dashboard", "/planBirthday","/contact"]}>
            <AppContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
