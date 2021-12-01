import { CalendarToday } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import { useHistory } from "react-router";
import { database } from "../../../firebase";
import "./FormData.scss";

const FormData = () => {
  const [formData, setFormData] = useState([""]);
  const [uiD, setUiD] = useState([""]);
  const [reload, setReload] = useState(1);

  //   reading data from firestore
  useEffect(() => {
    async function fetchData() {
      const data = await database.form_Data.get();
      let res = [];
      let ids = [];

      data.forEach((each) => ids.push(each.id));

      data.forEach((each) => res.push(each.data()));
      setFormData(res);
      setUiD(ids);
    }
    fetchData();
  }, [reload]);
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/planBirthday");
  };

  //   deleting data in firestore
  const deleteData = (index) => {
    deleteUser(index);
  };

  const deleteUser = async (index) => {
    await database.form_Data.doc(uiD[index]).delete();
    console.log("Inside Delete Firebase", uiD[index]);

    // window.location.href = "/formData";
    setReload(reload + 1);
  };

  return (
    <div className="bg-gray-400 min-h-screen">
      <button
        className=" ml-16 mt-10 px-5 py-3 bg-red-400 rounded-lg text-lg font-semibold text-black border-2 hover:border-red-700 "
        onClick={goToDashboard}
      >
        Go Back
      </button>
      <section className="formData-container  flex flex-row justify-evenly flex-wrap">
        {formData.map((each, index) => (
          <div key={index} className="blog-card m-5 flex web">
            <div className="content-mask pb-5">
              <span className="category">Form {index + 1}</span>
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
              <button
                className="p-2 mt-2 bg-red-600 rounded-md ml-auto w-20 h-10 text-white"
                onClick={() => deleteData(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormData;
