import "./App.css";
import Login from "./Pages/Auth/SignUp/SignUp";
import SignUp from "./Pages/Auth/Login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
