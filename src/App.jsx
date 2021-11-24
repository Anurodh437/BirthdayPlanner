import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authpage from "./Pages/Auth/AuthPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/login", "/signup"]} exact>
            {<Authpage />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
