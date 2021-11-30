import { useHistory } from "react-router";
import "./Details.scss";
import { auth, database } from "../../../firebase";
import { useCallback, useState } from "react";
import Modal from "../../../components/Modal/Modal";
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

  const goToFormData = () => {
    history.push("/formData");
  };
  //creating Form data in firestore
  const createEntry = useCallback(async (event) => {
    event.preventDefault();

    const {
      name,
      email,
      birth_date,
      age,
      phone_number,
      party_date,
      party_time,
      Venue_details,
    } = event.target.elements;
    try {
      const data = {
        name: name.value,
        email: email.value,
        birth_date: birth_date.value,
        age: age.value,
        phone_number: phone_number.value,
        party_date: party_date.value,
        party_time: party_time.value,
        Venue_details: Venue_details.value,
      };

      const res = await database.form_Data.add(data);
      console.log("Form Data Recorded");
      console.log(res);
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disablePrevdate = () => {
    return new Date().toLocaleDateString().split("/").reverse().join("-");
  };
  const [modal, setModal] = useState(false);

  return (
    <div className="body">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Modal
        show={modal}
        link="formData"
        message="Your details have been recorded."
      />
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
              className="profile cursor-pointer border-4 hover:border-black"
              onClick={goToFormData}
            />
          </ul>
        </div>
      </header>

      {/* Notes Card Container */}
      <div className="flex justify-evenly">
        {/* left container */}
        <div className="bg-black bg-opacity-50 w-5/12 rounded-md py-2 mb-4">
          <div className="flex items-start justify-center px-4 sm:px-2 lg:px-8">
            <div className="w-full">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-left text-4xl font-extrabold text-white">
                  Fill the Form
                </h2>
                <img
                  src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-cake-fathers-day-sbts2018-flat-sbts2018.png"
                  alt=""
                />
              </div>
              <form className="" onSubmit={createEntry}>
                <div className="flex justify-between mt-3 space-x-10">
                  <div className="w-full">
                    <label htmlFor="name" className="text-white font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-gray-300 text-base relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full">
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
                </div>
                <div className="flex justify-between mt-4 w-full">
                  <div className="flex flex-col">
                    <label
                      className="text-white font-medium"
                      htmlFor="birth_date"
                    >
                      Birth Date
                    </label>
                    <input
                      id="birth_date"
                      name="birth_date"
                      type="date"
                      required
                      className="w-full lg:w-52 bg-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white font-medium" htmlFor="age">
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      required
                      className="w-24 rounded bg-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white font-medium" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      placeholder="Phone"
                      id="phone_number"
                      name="phone_number"
                      className="'w-full lg:w-52 rounded bg-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="mt-8 text-4xl font-medium text-center text-white">
                    Party Details
                  </h1>
                  <div className="flex justify-between space-x-10 mt-4">
                    <div className="flex flex-col w-full">
                      <label
                        className="text-white font-medium"
                        htmlFor="party_date"
                      >
                        Date of Party
                      </label>
                      <input
                        id="party_date"
                        name="party_date"
                        type="date"
                        required
                        className="w-full rounded bg-gray-300"
                        min={disablePrevdate()}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        className="text-white font-medium"
                        htmlFor="party_time"
                      >
                        Time of Party
                      </label>
                      <input
                        className="w-full rounded bg-gray-300"
                        id="party_time"
                        name="party_time"
                        type="time"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col">
                    <label
                      className="text-white font-medium"
                      htmlFor="Venue_detials"
                    >
                      Venue Details
                    </label>
                    <textarea
                      className="rounded p-1 w-full bg-gray-300"
                      placeholder="Venue..."
                      name="Venue_details"
                      id="Venue_details"
                      cols="48"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="group relative sm:w-full lg:w-48 flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            <h3 className="card_head font-semibold text-xl">
              Restaurants & Hotels
            </h3>
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
