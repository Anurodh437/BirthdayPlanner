import { useHistory } from "react-router";
import "./Details.scss";
import { auth } from "../../../firebase";
const Details = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/dashboard");
  };
  const goToFeedback = () => {
    history.push("/feedback");
  };

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  const goToTestimonials = () => {
    history.push("/testimonials");
  };

  // //   reading data from firestore
  // useEffect(() => {
  //   async function fetchData() {
  //     // to get data from firebase collection by uId
  //     const response = await database.form_Data.doc(uID).get();
  //     console.log("Form Data by ID", response.data());

  //     //getting form_Data in the collection
  //     const data = await database.form_Data.get();
  //     console.log("Form Data");
  //     data.forEach((each) => console.log(each.data()));

  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="body">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      {/* <div class="content">
        <h1>Sliding Diagonals Background Effect</h1>
      </div> */}
      <header className="header">
        <h1 className="logo">
          <a href="/dashboard">BirthdayPlanner</a>
        </h1>
        <div className="links">
          <ul>
            <li onClick={goToHome}>Home</li>
            <li onClick={goToTestimonials}>Testimonials</li>
            <li onClick={goToFeedback}>Feedback</li>
            <li onClick={logout}>Sign Out</li>
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
        <div className="w-96 linear-img">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="flex mt-7">
          <a class="gift_card1" href="/gifts">
            <h3 className="card_head">Gifts</h3>
            <p class="small">
              Find the best gift for your loved ones on their birthday Lorem
              ipsum dolor sit amet consectetur adipisicing
            </p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </a>

          <a class="gift_card2" href="/restaurants">
            <h3 className="card_head">Restaurants & Hotels</h3>
            <p class="small">
              Find some of the best restaurants near your place to chill out
              with your family and friends on birthdayys.
            </p>
            <div class="go-corner2" href="#">
              <div class="go-arrow2">→</div>
            </div>
          </a>
        </div>
        <div className="w-96 linear-img">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
