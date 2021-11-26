import React from "react";
import "./Dashboard.scss";
import mainImage from "../../../assets/image_processing20211110-13169-mniu50.png";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();

  const goToLogin = () => {
    // history.push("/login");
    window.location.href = "/login";
  };

  const goToPlanBirthday = () => {
    history.push("/planBirthday");
  };
  return (
    <div className="body">
      <header className="header">
        <h1 className="logo">
          <a style={{ textDecoration: "none" }} href="/dashboard">
            BirthdayPlanner
          </a>
        </h1>
        <div className="links">
          <ul>
            <li>Testimonials</li>
            <li>Contact</li>
            <li onClick={goToPlanBirthday}>Plan Birthday</li>
            <li onClick={goToLogin}>Login</li>
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
              <i className="fas fa-tint"></i>
            </div>
            <div className="data">
              <h1>Personalized birthday messages</h1>
              <p>Lorem</p>
            </div>
          </div>
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
              <p>8.25 x 31.875</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
