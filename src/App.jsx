import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Authpage from "./Pages/Auth/AuthPage";
import AppContainer from "./Pages/AppContainer/AppContainer";
import { useState, useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

    console.log("UID ", user && user.uid);

    user && localStorage.setItem("loggedIn", "yes");

    // it will run when component unmounts like componentDidUnmount()
    return () => {
      unsub();
    };
  });

  console.log(user);
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "yes" && !user) return <h1> Loading </h1>;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path={["/login", "/signup"]}>
          <Authpage />
        </Route>
        <Route
          exact
          path={["/dashboard", "/planBirthday", "/restaurants", "/contact","/gifts"]}
        >
          <AppContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
