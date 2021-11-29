import React, { useState } from "react";
import "./gift.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Gifts = () => {
  const [result1, setresult1] = useState(data1.search_results);
  const [result2, setresult2] = useState(data2.search_results);
  const [result3, setresult3] = useState(data3.search_results);
  const [result4, setresult4] = useState(data4.search_results);
  console.log(result1, setresult1);
  console.log(result2, setresult2);
  console.log(result3, setresult3);
  console.log(result4, setresult4);

  return (
    <div className="">
      <div className="gift h-screen">
        <div className="flex flex-col lg:p-44 md:p-36 p-16">
          <h1 className="awes text-4xl mt-4 pb-2 lg:text-7xl sm:text-lg md:text-5xl text-white">
            Awesome Gifts
            <br />
            For your Loved Once
          </h1>
          <p className="awes text-blue-400 text-xl pb-3">
            Create Happiness by gifting your loved once.
          </p>
          <a href="#gifts-section">
            <button className="font-sans p-2 w-28 mt-2 ml-2 rounded-sm text-lg bg-red-600">
              Buy Gifts
            </button>
          </a>
        </div>
      </div>

      <div
        id="gifts-section"
        className="antialiased down-bg text-white font-sans p-6"
      >
        <h1 className="flex text-white justify-center text-3xl">
          Find Unique Presents and gifts, Here!
        </h1>
        <p className="flex text-white justify-center text-lg">
          The Best gifts at the best prices
        </p>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* card1 mapping */}
            {result1.map((data, index) => {
              console.log("Card ", data);
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
                        <span className="text-lg mr-1">
                          {data.price.symbol}
                        </span>
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
                        {data.delivery.tagline}
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
                      <svg data-tooltip-target="tooltip-dark"
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
            {/* card2 mapping */}
            {result2.map((data, index) => {
              console.log("Card ", data);
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
                        <span className="text-lg mr-1">
                          {data.price.symbol}
                        </span>
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
                      <span className="flex items-center text-sm font-medium">
                        {data.delivery.tagline}
                      </span>
                    </div>
                    <div className="p-3 flex items-center text-sm text-gray-600">
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

            {/* card3 mapping */}
            {result3.map((data, index) => {
              console.log("Card ", data);
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
                      {/* <p className="text-sm">{data.title}</p> */}
                      <div className="mt-3 flex items-center">
                        <span className="text-lg mr-1">
                          {data.price.symbol}
                        </span>
                        <span className="font-bold text-xl">
                          {data?.price?.value}
                        </span>
                        &nbsp;
                        <span>{data?.coupon?.badge_text}</span>
                      </div>
                    </div>
                    <div className="p-3 border-t border-b text-xs text-gray-700">
                      <span className="flex items-center text-lg font-medium">
                        Delivery:
                      </span>
                      <span className="flex items-center text-xs font-medium">
                        {data.delivery.tagline}
                      </span>
                    </div>
                    <div className="p-3 flex items-center text-sm text-gray-600">
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
                      <span className="ml-3 text-base mt-1">{0} ratings</span>
                    </div>
                  </a>
                </div>
              );
            })}

            {/* card4 mapping */}
            {result4.map((data, index) => {
              console.log("Card ", data);
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
                        className="absolute inset-0 h-full w-full object-cover border-2 "
                        src={data.image}
                        alt="data_image"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="mt-2 mb-2  font-bold">
                        {data.title.substr(0, 70).concat("...")}
                      </h2>
                      {/* <p className="text-sm">{data.title}</p> */}
                      <div className="mt-3 flex items-center">
                        <span className="text-lg mr-1">
                          {data.price.symbol}
                        </span>
                        <span className="font-bold text-xl">
                          {data?.price?.value}
                        </span>
                        &nbsp;
                        <span>{data?.coupon?.badge_text}</span>
                      </div>
                    </div>
                    <div className="p-3 border-t border-b text-xs text-gray-700">
                      <span className="flex items-center text-lg font-medium">
                        Delivery:
                      </span>
                      <span className="flex items-center text-xs font-medium">
                        {data.delivery.tagline}
                      </span>
                    </div>
                    <div className="p-3 flex items-center text-sm text-gray-600">
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
        </div>
      </div>
    </div>
  );
};

export default Gifts;

const data1 = {
  request_info: {
    success: true,
    credits_used: 3,
    credits_remaining: 97,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-28T17:29:12.758Z",
    processed_at: "2021-11-28T17:29:18.449Z",
    total_time_taken: 5.69,
    amazon_url:
      "https://www.amazon.in/s/?k=photo+frames&ref=nb_sb_noss_2&s=relevanceblender&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.in",
    search_term: "photo frames",
    output: "json",
    language: "en_US",
    sort_by: "featured",
  },
  search_results: [
    {
      position: 1,
      title:
        "Amazon Brand - Solimo Collage Photo Frames (Set of 11, Wall Hanging),Black (SOL-HD-PF2)",
      asin: "B076VF43H3",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A0180345YYWZAFJSR30S&url=%2FAmazon-Brand-Solimo-Collage-Hanging%2Fdp%2FB076VF43H3%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dphoto%2Bframes%26qid%3D1638120555%26sr%3D8-1-spons%26psc%3D1&qualifier=1638120555&id=1733179436288020&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71mqJyckdsL._AC_UL320_.jpg",
      is_prime: true,
      rating: 4.1,
      ratings_total: 448,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 851,
          currency: "INR",
          raw: "₹851",
          name: "₹851₹851 ₹2,500₹2,500",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 2500,
          currency: "INR",
          raw: "₹2,500",
          name: "₹851₹851 ₹2,500₹2,500",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 851,
        currency: "INR",
        raw: "₹851",
        name: "₹851₹851 ₹2,500₹2,500",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Tuesday, November 30",
      },
    },
    {
      position: 2,
      title: 'AmazonBasics Photo Frame with Stand, Set of 5 | 8" x 10", Black',
      asin: "B079LC6XCD",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A0102661BW8ACCDB2O1Z&url=%2FAmazonBasics-Table-Photo-Frames-Stand%2Fdp%2FB079LC6XCD%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dphoto%2Bframes%26qid%3D1638120555%26sr%3D8-2-spons%26psc%3D1&qualifier=1638120555&id=1733179436288020&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71vD1klNDbL._AC_UL320_.jpg",
      is_prime: true,
      rating: 4.6,
      ratings_total: 876,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 1829,
          currency: "INR",
          raw: "₹1,829",
          name: "₹1,829₹1,829 ₹3,000₹3,000",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 3000,
          currency: "INR",
          raw: "₹3,000",
          name: "₹1,829₹1,829 ₹3,000₹3,000",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 1829,
        currency: "INR",
        raw: "₹1,829",
        name: "₹1,829₹1,829 ₹3,000₹3,000",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Tuesday, November 30",
      },
    },
    {
      position: 3,
      title:
        "KDM Home Decor 1 Pcs 10x12 Inch Golden Bindi Color Flexible Glass & Synthetic Wood Hanging/Table Top Modern Photo Frame for Wall Decoration",
      asin: "B09LSK58VW",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A06997602OACDI4PE26L8&url=%2FKDM-Home-Decor-Synthetic-Decoration%2Fdp%2FB09LSK58VW%2Fref%3Dsr_1_3_sspa%3Fkeywords%3Dphoto%2Bframes%26qid%3D1638120555%26sr%3D8-3-spons%26psc%3D1&qualifier=1638120555&id=1733179436288020&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61sy9v0stgS._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save ₹20",
        text: "with coupon",
      },
      is_prime: true,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 499,
          currency: "INR",
          raw: "₹499",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 1764,
          currency: "INR",
          raw: "₹1,764",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 499,
        currency: "INR",
        raw: "₹499",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, December 4",
      },
    },
    {
      position: 4,
      title:
        "KDM Home Decor 1 Pcs 5x7 Inches Flexible Glass & Synthetic Wood Hanging/Table Top Modern Art Photo Frame for Wall Decoration Chatai Brown Color",
      asin: "B09LSLXB4F",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09310881WUBYO644968X&url=%2FKDM-Home-Decor-Synthetic-Decoration%2Fdp%2FB09LSLXB4F%2Fref%3Dsr_1_4_sspa%3Fkeywords%3Dphoto%2Bframes%26qid%3D1638120555%26sr%3D8-4-spons%26psc%3D1&qualifier=1638120555&id=1733179436288020&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/616s7+H8nsS._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save ₹20",
        text: "with coupon",
      },
      is_prime: true,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 378,
          currency: "INR",
          raw: "₹378",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 1134,
          currency: "INR",
          raw: "₹1,134",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 378,
        currency: "INR",
        raw: "₹378",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, December 4",
      },
    },
  ],
};

const data2 = {
  request_info: {
    success: true,
    credits_used: 4,
    credits_remaining: 96,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-28T17:30:27.979Z",
    processed_at: "2021-11-28T17:30:33.207Z",
    total_time_taken: 5.23,
    amazon_url:
      "https://www.amazon.in/s/?k=mugs+with+photo&ref=nb_sb_noss_2&s=relevanceblender&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.in",
    search_term: "mugs with photo",
    output: "json",
    language: "en_US",
    sort_by: "featured",
  },
  search_results: [
    {
      position: 1,
      title:
        "DAYS Ceramic Personalized Coffee Mug with Photo Print Customized Printed Coffee Mugs Tea Milk Husband Wife Girlfriend Boyfriend Anniversary Birthday Mother Father Gifts",
      asin: "B09FKHCBPP",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A0659296BGNXKHJUGHFN&url=%2FDAYS-Personalized-Customized-Girlfriend-Anniversary%2Fdp%2FB09FKHCBPP%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmugs%2Bwith%2Bphoto%26qid%3D1638120630%26sr%3D8-1-spons%26psc%3D1&qualifier=1638120630&id=4758350286197330&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/31or0fMm8ZS._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save 5%",
        text: "with coupon",
      },
      is_prime: true,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 346,
          currency: "INR",
          raw: "₹346",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 1000,
          currency: "INR",
          raw: "₹1,000",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 346,
        currency: "INR",
        raw: "₹346",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, December 4",
      },
    },
    {
      position: 2,
      title:
        "GIFTkarde Personalized Photos Printed Ceramic Coffee Mug (White, Random Collage Design, 11 Oz)",
      asin: "B092R4DVVX",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A057772627ZL9W84SQEWH&url=%2FGIFTkarde-Personalized-Printed-Ceramic-Collage%2Fdp%2FB092R4DVVX%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmugs%2Bwith%2Bphoto%26qid%3D1638120630%26sr%3D8-2-spons%26psc%3D1&qualifier=1638120630&id=4758350286197330&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71PutR8oodS._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save 12%",
        text: "with coupon",
      },
      rating: 4.5,
      ratings_total: 24,
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 275,
          currency: "INR",
          raw: "₹275",
          name: "₹275₹275 ₹400₹400",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 400,
          currency: "INR",
          raw: "₹400",
          name: "₹275₹275 ₹400₹400",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 275,
        currency: "INR",
        raw: "₹275",
        name: "₹275₹275 ₹400₹400",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Sunday, December 5",
      },
    },
    {
      position: 3,
      title:
        "Deekshita Personalize Ceramic Coffee Mug with Photo , White Cup, 325ml",
      asin: "B08NYK6YLF",
      link: "https://www.amazon.in/Deekshita-Personalize-Ceramic-Coffee-Photo/dp/B08NYK6YLF/ref=sr_1_3?keywords=mugs+with+photo&qid=1638120630&qsid=258-4335288-7820363&sr=8-3&sres=B08NYK6YLF%2CB07B2W7Q62%2CB07MW31NCH%2CB08CBLJ4YR%2CB085Y6M68W%2CB0862FYGMD%2CB09HMW5441%2CB07WV1YV5V%2CB08QFD3XR9%2CB08X1NSSBS%2CB08RWZBZT1%2CB08QMJ77FX%2CB08TMKYTQF%2CB0864329VM%2CB082Z4KHD1%2CB09MKY8X9J%2CB084DNXQFK%2CB0924YNY34%2CB09FGW2TX4%2CB08BK3R5Y1&srpt=DRINKING_CUP",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71mtk8nuf6L._AC_UL320_.jpg",
      amazons_choice: {
        link: "https://www.amazon.in/Deekshita-Personalize-Ceramic-Coffee-Photo/dp/B08NYK6YLF/ref=ice_ac_b_dpb?keywords=mugs+with+photo&qid=1638120630&qsid=258-4335288-7820363&sr=8-3&sres=B08NYK6YLF%2CB07B2W7Q62%2CB07MW31NCH%2CB08CBLJ4YR%2CB085Y6M68W%2CB0862FYGMD%2CB09HMW5441%2CB07WV1YV5V%2CB08QFD3XR9%2CB08X1NSSBS%2CB08RWZBZT1%2CB08QMJ77FX%2CB08TMKYTQF%2CB0864329VM%2CB082Z4KHD1%2CB09MKY8X9J%2CB084DNXQFK%2CB0924YNY34%2CB09FGW2TX4%2CB08BK3R5Y1&srpt=DRINKING_CUP",
        keywords: '"mugs with photo"',
      },
      is_prime: true,
      rating: 4.7,
      ratings_total: 116,
      prices: [
        {
          symbol: "₹",
          value: 225,
          currency: "INR",
          raw: "₹225",
          name: "₹225₹225 ₹499₹499",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 499,
          currency: "INR",
          raw: "₹499",
          name: "₹225₹225 ₹499₹499",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 225,
        currency: "INR",
        raw: "₹225",
        name: "₹225₹225 ₹499₹499",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Wednesday, December 1",
      },
    },
    {
      position: 4,
      title:
        "GiftsOnn Personalized White Photo Printed Mug, 1 Wooden Keychain (1 Ceramic Printed Coffee Mug - 325 ml)",
      asin: "B07B2W7Q62",
      link: "https://www.amazon.in/Beautiful-Personalized-Personalized-Customized-Anniversary/dp/B07B2W7Q62/ref=sr_1_4?keywords=mugs+with+photo&qid=1638120630&qsid=258-4335288-7820363&sr=8-4&sres=B08NYK6YLF%2CB07B2W7Q62%2CB07MW31NCH%2CB08CBLJ4YR%2CB085Y6M68W%2CB0862FYGMD%2CB09HMW5441%2CB07WV1YV5V%2CB08QFD3XR9%2CB08X1NSSBS%2CB08RWZBZT1%2CB08QMJ77FX%2CB08TMKYTQF%2CB0864329VM%2CB082Z4KHD1%2CB09MKY8X9J%2CB084DNXQFK%2CB0924YNY34%2CB09FGW2TX4%2CB08BK3R5Y1&srpt=DRINKING_CUP",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/6136zAXXiML._AC_UL320_.jpg",
      rating: 4.4,
      ratings_total: 1043,
      prices: [
        {
          symbol: "₹",
          value: 199,
          currency: "INR",
          raw: "₹199",
          name: "₹199₹199 ₹399₹399",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 399,
          currency: "INR",
          raw: "₹399",
          name: "₹199₹199 ₹399₹399",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 199,
        currency: "INR",
        raw: "₹199",
        name: "₹199₹199 ₹399₹399",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Friday, December 3",
      },
    },
  ],
};

const data3 = {
  request_info: {
    success: true,
    credits_used: 5,
    credits_remaining: 95,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-28T17:40:59.028Z",
    processed_at: "2021-11-28T17:41:03.881Z",
    total_time_taken: 4.85,
    amazon_url:
      "https://www.amazon.in/s/?k=bouquet+for+birthday+gift&ref=nb_sb_noss_2&s=relevanceblender&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.in",
    search_term: "bouquet for birthday gift",
    output: "json",
    language: "en_US",
    sort_by: "featured",
  },
  search_results: [
    {
      position: 1,
      title: "FD marts 20 mix color roses bouquet - Birthday gift",
      asin: "B09H66RKT3",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02333061PXXYGJ1BD221&url=%2Fmarts-mix-color-roses-bouquet%2Fdp%2FB09H66RKT3%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dbouquet%2Bfor%2Bbirthday%2Bgift%26qid%3D1638121261%26sr%3D8-1-spons%26psc%3D1&qualifier=1638121261&id=8849655177044565&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71dr8F-cNXL._AC_UL320_.jpg",
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 749,
          currency: "INR",
          raw: "₹749",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 1155,
          currency: "INR",
          raw: "₹1,155",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 749,
        currency: "INR",
        raw: "₹749",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Friday, December 3 - Tuesday, December 7",
      },
    },
    {
      position: 2,
      title: "FD Marts 15 Red roses bunch (Bouquet) love special",
      asin: "B09GVFTLYS",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02329061ROPTHADJ3UYQ&url=%2FMarts-roses-bunch-Bouquet-special%2Fdp%2FB09GVFTLYS%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dbouquet%2Bfor%2Bbirthday%2Bgift%26qid%3D1638121261%26sr%3D8-2-spons%26psc%3D1&qualifier=1638121261&id=8849655177044565&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51OuVJWQvPL._AC_UL320_.jpg",
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 555,
          currency: "INR",
          raw: "₹555",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 895,
          currency: "INR",
          raw: "₹895",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 555,
        currency: "INR",
        raw: "₹555",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Friday, December 3 - Tuesday, December 7",
      },
    },
    {
      position: 3,
      title:
        "FD Marts Red and white roses bouquet of 10 roses cellophane wrapped",
      asin: "B09GMKQN2D",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02320702H5KFYCY3BD0S&url=%2FMarts-white-bouquet-cellophane-wrapped%2Fdp%2FB09GMKQN2D%2Fref%3Dsr_1_3_sspa%3Fkeywords%3Dbouquet%2Bfor%2Bbirthday%2Bgift%26qid%3D1638121261%26sr%3D8-3-spons%26psc%3D1&qualifier=1638121261&id=8849655177044565&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51UTKEE2MfL._AC_UL320_.jpg",
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 399,
          currency: "INR",
          raw: "₹399",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 798,
          currency: "INR",
          raw: "₹798",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 399,
        currency: "INR",
        raw: "₹399",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Tuesday, November 30 - Friday, December 3",
      },
    },
    {
      position: 4,
      title: "FD marts 9 red roses bouquet wrapped in double paper",
      asin: "B09H65QDFX",
      link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A03130003CRY2TSSBQ0NN&url=%2Fmarts-roses-bouquet-wrapped-double%2Fdp%2FB09H65QDFX%2Fref%3Dsr_1_4_sspa%3Fkeywords%3Dbouquet%2Bfor%2Bbirthday%2Bgift%26qid%3D1638121261%26sr%3D8-4-spons%26psc%3D1&qualifier=1638121261&id=8849655177044565&widgetName=sp_atf",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/41OXOTFUiML._AC_UL320_.jpg",
      sponsored: true,
      prices: [
        {
          symbol: "₹",
          value: 481,
          currency: "INR",
          raw: "₹481",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 799,
          currency: "INR",
          raw: "₹799",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 481,
        currency: "INR",
        raw: "₹481",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Tuesday, November 30 - Friday, December 3",
      },
    },
  ],
};

const data4 = {
  request_info: {
    success: true,
    credits_used: 6,
    credits_remaining: 94,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-28T17:42:18.102Z",
    processed_at: "2021-11-28T17:42:22.737Z",
    total_time_taken: 4.63,
    amazon_url:
      "https://www.amazon.in/s/?k=birthday+decorations&ref=nb_sb_noss_2&s=relevanceblender&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.in",
    search_term: "birthday decorations",
    output: "json",
    language: "en_US",
    sort_by: "featured",
  },
  search_results: [
    {
      position: 1,
      title:
        "Party Propz Happy Birthday Decoration Kit Combo - 53Pcs Black Golden Silver Items Set with 2Pcs Silver Foil Curtain,50 Pcs Metallic Balloons, Golden Happy Birthday Foil Balloon/ Balloon Set",
      asin: "B07QBCKWSD",
      link: "https://www.amazon.in/Party-Propz-Birthday-Balloons-Metallic/dp/B07QBCKWSD/ref=sr_1_1?keywords=birthday+decorations&qid=1638121340&sr=8-1",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81ohlP0VtFL._AC_UL320_.jpg",
      is_prime: true,
      rating: 4.2,
      ratings_total: 3260,
      prices: [
        {
          symbol: "₹",
          value: 399,
          currency: "INR",
          raw: "₹399",
          name: "₹399₹399 ₹899₹899",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 899,
          currency: "INR",
          raw: "₹899",
          name: "₹399₹399 ₹899₹899",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 399,
        currency: "INR",
        raw: "₹399",
        name: "₹399₹399 ₹899₹899",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Tomorrow, November 29",
      },
    },
    {
      position: 2,
      title:
        "Party Propz Golden Black and Silver Balloon Birthday Decorations Items - 33Pcs Combo For Kids,Adult Birthday",
      asin: "B07VKSHPV1",
      link: "https://www.amazon.in/Party-Propz-Balloon-Birthday-Decorations/dp/B07VKSHPV1/ref=sr_1_2?keywords=birthday+decorations&qid=1638121340&sr=8-2",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/817DbY189rL._AC_UL320_.jpg",
      is_prime: true,
      rating: 3.9,
      ratings_total: 24605,
      prices: [
        {
          symbol: "₹",
          value: 399,
          currency: "INR",
          raw: "₹399",
          name: "₹399₹399 ₹999₹999",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 999,
          currency: "INR",
          raw: "₹999",
          name: "₹399₹399 ₹999₹999",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 399,
        currency: "INR",
        raw: "₹399",
        name: "₹399₹399 ₹999₹999",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Tomorrow, November 29",
      },
    },
    {
      position: 3,
      title:
        "Party Propz Birthday Decoration Kit for Girls - 34Pcs Pink, White Golden Metallic Birthday balloons for Girls Decoration, Golden Foil Curtain, Pink Happy Birthday Banner/Birthday Decoration Combo Set",
      asin: "B07VNDPZ1B",
      link: "https://www.amazon.in/Party-Propz-Birthday-Balloons-Decoration/dp/B07VNDPZ1B/ref=sr_1_3?keywords=birthday+decorations&qid=1638121340&sr=8-3",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81lqxnSgCpL._AC_UL320_.jpg",
      is_prime: true,
      rating: 3.9,
      ratings_total: 24605,
      prices: [
        {
          symbol: "₹",
          value: 359,
          currency: "INR",
          raw: "₹359",
          name: "₹359₹359 ₹966₹966",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 966,
          currency: "INR",
          raw: "₹966",
          name: "₹359₹359 ₹966₹966",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 359,
        currency: "INR",
        raw: "₹359",
        name: "₹359₹359 ₹966₹966",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Tomorrow, November 29",
      },
    },
    {
      position: 4,
      title:
        "Party Propz Rubber Rose Gold Birthday Decorations Combo Black Banner With Confetti Balloons, Star Foil Balloons, Foil Curtain for 1st 18th 21st 25th 50th 60th 30th Decorations - Set of 68",
      asin: "B08P4YXQPM",
      link: "https://www.amazon.in/Party-Propz-Birthday-Decorations-Confetti/dp/B08P4YXQPM/ref=sr_1_4?keywords=birthday+decorations&qid=1638121340&sr=8-4",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/715KIrmx9FL._AC_UL320_.jpg",
      amazons_choice: {
        link: "https://www.amazon.in/Party-Propz-Birthday-Decorations-Confetti/dp/B08P4YXQPM/ref=ice_ac_b_dpb?keywords=birthday+decorations&qid=1638121340&sr=8-4",
        keywords: '"birthday decorations"',
      },
      is_prime: true,
      rating: 4.3,
      ratings_total: 3435,
      prices: [
        {
          symbol: "₹",
          value: 499,
          currency: "INR",
          raw: "₹499",
          name: "₹499₹499 ₹999₹999",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 999,
          currency: "INR",
          raw: "₹999",
          name: "₹499₹499 ₹999₹999",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 499,
        currency: "INR",
        raw: "₹499",
        name: "₹499₹499 ₹999₹999",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Friday, December 3",
      },
    },
  ],
};
