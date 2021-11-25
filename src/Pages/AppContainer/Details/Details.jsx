import React from "react";
import { useHistory } from "react-router";

const Details = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <header>
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
