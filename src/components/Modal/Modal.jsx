import React from "react";
import { useHistory } from "react-router";
import "./Modal.scss";

const Modal = (props) => {
  let disp = " hidden ";
  if (props.show === true) disp = "block";

  console.log(props.show, disp);
  const history = useHistory();
  const goToDashboard = () => {
    history.push("/dashboard");
  };
  return (
    <div
      className={"fixed z-10 inset-0 overflow-y-auto" + disp}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <img
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/000000/external-checkbox-tick-mark-accept-your-checklist-queries-basic-color-tal-revivo.png"
                  alt=""
                />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Thank You.
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thank you for contacting with us. We will get in touch with
                    you as sson as possible. <br />
                    Enjoy your day 🎉.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={goToDashboard}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
