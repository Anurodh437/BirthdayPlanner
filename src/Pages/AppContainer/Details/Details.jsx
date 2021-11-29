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

  return (
    <div className="body">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
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
      <div className="flex justify-evenly">
        {/* left container */}
        <div className="bg-black bg-opacity-50 w-5/12 rounded-md py-2 mb-2">
          <div className="min-h-full flex items-start justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
              <div className="flex justify-between items-center ">
                <h2 className="text-left text-3xl font-extrabold text-white">
                  Fill the Form
                </h2>
                <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-cake-fathers-day-sbts2018-flat-sbts2018.png"alt=""/>
              </div>
              <form className="" action="#" method="POST">
                <div className="">
                  <div className="my-3">
                    <label htmlFor="name" className="text-white font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="email"
                      required
                      className="bg-gray-300 text-base relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="email" className="text-white font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-300 relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="email"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <label className="text-white font-medium" htmlFor="birth_date">Birth Date</label>
                      <input
                        id="birth_date"
                        name="birth_date"
                        type="date"
                        required
                        className="w-full bg-gray-300"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="text-white font-medium" htmlFor="age">Age</label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        required
                        className="w-32 bg-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex mt-4 space-x-2">
                      <label className="text-white font-medium" htmlFor="phone">Phone Number</label>
                      <input type="text" placeholder="Phone" className="'w-full bg-gray-300"  />
                    </div>
                  <div>
                    <h1 className="mt-6 text-3xl font-medium text-center text-white">
                      Party Details
                    </h1>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <label className="text-white font-medium" htmlFor="party_date">Date of Party</label>
                        <input
                          id="party_date"
                          name="party_date"
                          type="date"
                          required
                          className="w-full bg-gray-300"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-white font-medium" htmlFor="party_time">Time of Party</label>
                        <input
                          className="w-32 bg-gray-300"
                          id="party_time"
                          name="party_time"
                          type="time"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="text-white font-medium" htmlFor="Venue_detials">Venue Details</label>
                      <textarea
                        className="rounded p-1 bg-gray-300"
                        placeholder="Venue..."
                        name="Venue_details"
                        id="Venue_details"
                        cols="35"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* right container */}
        <div className="card_container">
          <a className="gift_card1" href="/gifts">
            <h3 className="card_head font-semibold text-xl">Gifts</h3>
            <p className="small">
              Find the best gift for your loved ones on their birthday Lorem
              ipsum dolor sit amet consectetur adipisicing
            </p>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
          <a className="gift_card2" href="/restaurants">
            <h3 className="card_head font-semibold text-xl">Restaurants & Hotels</h3>
            <p className="small">
              Find some of the best restaurants near your place to chill out
              with your family and friends on birthdayys.
            </p>
            <div className="go-corner2" href="#">
              <div className="go-arrow2">→</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
