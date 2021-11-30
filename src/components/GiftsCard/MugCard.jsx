import data2 from "../../components/GiftList/MugList";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const MugCard = () => {
  const [result2, setresult2] = useState(data2.search_results);
  console.log(result2, setresult2);

  return (
    <div className="flex flex-wrap -mx-4">
      {result2.map((data, index) => {
        // console.log("Card ", data);
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 shadow-xl"
          >
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover border-2"
                  src={data.image}
                  alt="data_image"
                />
              </div>
              <div className="p-4">
                <h2 className="mt-2 mb-2  font-bold">
                  {data.title.substr(0, 70).concat("...")}
                </h2>
                <div className="mt-3 flex items-center">
                  <span className="text-lg mr-1">{data.price.symbol}</span>
                  <span className="font-bold text-xl">
                    {data?.price?.value}
                  </span>
                  &nbsp;
                  <span className="ml-1">{data?.coupon?.badge_text}</span>
                </div>
              </div>
              <div className="p-3 border-t border-b text-xs text-gray-700">
                <span className="flex items-center text-lg font-medium">
                  Delivery:
                </span>
                <span className="flex items-center text-xs font-medium">
                  {data.delivery?.tagline}
                </span>
              </div>
              <div className="p-3 flex items-center text-sm text-gray-600">
                <div
                  id="tooltip-dark"
                  role="tooltip"
                  className="tooltip absolute z-50 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
                >
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <svg
                  data-tooltip-target="tooltip-dark"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-4 w-4 fill-current text-yellow-500 tooltip"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-gray-400"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <MdKeyboardArrowDown className="ml-0.5 " />
                <span className="ml-3 text-base mt-1">
                  {data.ratings_total} ratings
                </span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MugCard;
