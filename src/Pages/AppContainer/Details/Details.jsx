import React from "react";
import { useHistory } from "react-router";
import "./Details.scss";
const Details = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/dashboard");
  };
  const goToContact = () => {
    history.push("/contact");
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
            <li onClick={goToContact}>Contact</li>
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
      <div className="card_container">
        <a class="gift_card1" href=" ">
          <h3 className="card_head">Gifts</h3>
          <p class="small">
            Find the best gift for your loved ones on their birthday Lorem ipsum
            dolor sit amet consectetur adipisicing
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>

        <a class="gift_card2" href="/restaurants">
          <h3 className="card_head">Restaurants & Hotels</h3>
          <p class="small">
            Find some of the best restaurants near your place to chill out with
            your family and friends on birthdayys.
          </p>
          <div class="go-corner2" href="#">
            <div class="go-arrow2">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Details;
