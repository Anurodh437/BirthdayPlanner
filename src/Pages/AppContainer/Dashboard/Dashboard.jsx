import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import mainImage from "../../../assets/image_processing20211110-13169-mniu50.png";
import { useHistory } from "react-router";
import { auth } from "../../../firebase";

const Dashboard = () => {
  const history = useHistory();

  const [user, setUser] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

    // console.log("Dashboard UID ", user && user.uid);

    user && localStorage.setItem("loggedIn", "yes");

    // it will run when component unmounts like componentDidUnmount()
    return () => {
      unsub();
    };
  });

  // console.log("Dashboard User ", user);
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "yes" && !user) return <h1> Loading </h1>;

  const goToLogin = () => {
    // history.push("/login");
    window.location.href = "/login";
  };

  const goToPlanBirthday = () => {
    if (user === null) {
      window.location.href = "/login";
    } else window.location.href = "/planBirthday";
  };

  const goToFeedback = () => {
    history.push("/feedback");
  };

  const goToTestimonials = () => {
    history.push("/testimonials");
  };

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };
  return (
    <div className="body" style={{ backgroundColor: "#abf7ff" }}>
      <header className="header">
        <h1 className="logo">
          <a style={{ textDecoration: "none" }} href="/dashboard">
            BirthdayPlanner
          </a>
        </h1>
        <div className="links">
          <ul>
            <li onClick={goToPlanBirthday}>Plan Birthday</li>
            <li onClick={goToTestimonials}>Testimonials</li>
            <li onClick={goToFeedback}>Feedback</li>
            {user === null ? (
              <li onClick={goToLogin}>Register</li>
            ) : (
              <li onClick={logout}>Sign Out</li>
            )}
            <img
              src="https://image.flaticon.com/icons/png/512/2922/2922510.png"
              alt=""
              className="profile"
            />
          </ul>
        </div>
      </header>
      <section className="banner">
        <div className="left">
          <h1>
            Birthday Planning <br /> done right.
          </h1>
          <p className="subtitle">
            Plan best online birthdays <br /> for your loved ones for free .
          </p>
          <div className="buy">Plan it Now</div>
        </div>
        <img className="banner_img" src={mainImage} alt="" />

        <div className="right">
          <div className="quality">
            <div className="icon">
              <i className="fas fa-weight"></i>
            </div>
            <div className="data">
              <h1>Gift Recomendations</h1>
              <p>Best Gift recomendation for your birthday person.</p>
            </div>
          </div>
          <div className="quality">
            <div className="icon">
              <i className="fas fa-ruler-vertical"></i>
            </div>
            <div className="data">
              <h1>Nereby Restaurants</h1>
              <p>Best Restaurants & hotels Nereby</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
