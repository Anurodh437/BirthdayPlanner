import { CalendarToday } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import { useHistory } from "react-router";
import { database } from "../../../firebase";
import "./FormData.scss";

const FormData = () => {

  const [formData, setFormData] = useState([""]);

  //   reading data from firestore
  useEffect(() => {
    async function fetchData() {
      const data = await database.form_Data.get();
      let res = [];
      data.forEach((each) => res.push(each.data()));
      setFormData(res);
    }
    fetchData();
  }, []);
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/planBirthday");
  };

  // console.log("Form Data", formData);

  return (
    <div className="bg-gray-400 min-h-screen">
      <button
        className=" ml-16 mt-10 px-5 py-3 bg-red-400 rounded-lg text-lg font-semibold text-black border-2 hover:border-red-700 "
        onClick={goToDashboard}
      >
        Go Back
      </button>
      <section className="formData-container  flex flex-row justify-center flex-wrap">
        {formData.map((each, index) => (
          <div key={index} className="blog-card flex web">
            <div className="content-mask pb-5">
              <span className="category">Details</span>
              <h4> Email : {each.email}</h4>
              <h4> Name : {each.name}</h4>
              <h4> Age : {each.age}</h4>
              <h4 className="flex items-center p-1 ">
                <AiFillPhone className="mr-3" /> : {each.phone_number}
              </h4>
              <h4 className="flex items-center p-1">
                <CalendarToday className="mr-3 p-0.5" /> {each.party_date}
              </h4>
              <h4 className="flex items-center p-1 ">
                <AiFillClockCircle className="mr-3 " /> {each.party_time}
              </h4>
              <h4 className="flex items-center p-1">
                <CalendarToday className="mr-3 p-0.5" /> {each.birth_date}
              </h4>
              <h4 className="flex items-center p-1">
                Venue Details : {each.Venue_details}
              </h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormData;
