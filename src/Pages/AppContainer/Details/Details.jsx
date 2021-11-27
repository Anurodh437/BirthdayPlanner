import React from "react";
import { useHistory } from "react-router";
import "./Details.scss";
import {auth} from "../../../firebase";
const Details = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/dashboard");
  };

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="body">
      <header className="header">
        <h1 className="logo">
          <a href="/dashboard">BirthdayPlanner</a>
        </h1>
        <div className="links">
          <ul>
            <li onClick={goToHome}>Home</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li onClick={logout}>Logout</li>
            <img
              src="https://image.flaticon.com/icons/png/512/2922/2922510.png"
              alt=""
              className="profile"
            />
          </ul>
        </div>
      </header>

      {/* Notes Card Container */}
      <div>
        {/* Notes */}
        <div>
          <h1>Name</h1>
          <div>
            <h2>Date :</h2>
            <p>Desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
