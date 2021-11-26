import React from "react";
import { useHistory } from "react-router";
import "./Details.scss";
const Details = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/dashboard");
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
            <li>Logout</li>
            <img
              src="https://image.flaticon.com/icons/png/512/2922/2922510.png"
              alt=""
              className="profile"
            />
          </ul>
        </div>
      </header>
      <div>
        <h1>Find a Restaurant</h1>
      </div>

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
