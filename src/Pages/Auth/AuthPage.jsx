import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";

const Authpage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Routes>
    </Router>
  );
};

export default Authpage;
