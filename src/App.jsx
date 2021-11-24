import "./App.css";
import Login from "./Pages/Auth/SignUp/SignUp";
import SignUp from "./Pages/Auth/Login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
