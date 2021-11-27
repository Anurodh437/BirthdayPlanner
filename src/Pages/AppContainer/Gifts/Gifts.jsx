import React, { useState } from "react";
import "./gift.scss";

const Gifts = () => {
  const [results, setresults] = useState(data.search_results);
  console.log(results,setresults);

  return (
    <div className="">
      <div className="gift h-screen">
        <div className="p-44">
          <h1 className="awes text-7xl text-white">
            Awesome Gifts
            <br />
            For your Loved Once
          </h1>
          <p className="awes text-blue-400 p-2 text-2xl">
            Create Happiness by gifting your loved once.
          </p>
          <button className="font-sans p-2 w-28 mt-2 ml-2 rounded-sm text-lg bg-red-600">
            Buy Gifts
          </button>
        </div>
      </div>

      <div className="flex w-full flex-row flex-wrap ">
        {results.map((data, index) => {
          console.log("Card ", data);
          return (
            <div
              key={index}
              className="antialiased  text-gray-900 font-sans p-6"
            >
              {/* <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4"> */}
              <div className=" w-48 mx-auto ">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Highlight
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">{data.title}</h2>

                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-semibold">ab</span>&nbsp;
                      <span className="font-bold text-xl"> </span>
                      &nbsp;
                      <span className="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                      <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                      3 Tage
                    </span>
                    <span className="flex items-center">
                      <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      Ermäßigung mit Karte
                    </span>
                  </div>
                  <div className="p-4 flex items-center text-sm text-gray-600">
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
                    <span className="ml-2">34 Bewertungen</span>
                  </div>
                </a>
              </div>
            </div>
            // </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gifts;

const data = {
  request_info: {
    success: true,
    credits_used: 1,
    credits_remaining: 99,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2021-11-27T05:13:47.964Z",
    processed_at: "2021-11-27T05:13:56.812Z",
    total_time_taken: 8.85,
    amazon_url:
      "https://www.amazon.com/s/?k=memory+cards&ref=nb_sb_noss_2&language=en_US",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.com",
    search_term: "memory cards",
    output: "json",
    exclude_sponsored: "false",
    language: "en_US",
    customer_location: "gb",
  },
  search_results: [
    {
      position: 1,
      title:
        "Gigastone 32GB 5 Pack SD Card UHS-I U1 Class 10 SDHC Memory Card High Speed Full HD Video Canon Nikon Sony Pentax Kodak Olympus Panasonic Digital Camera",
      asin: "B07X9YC983",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81x3A65gXNL._AC_UY218_.jpg",
      rating: 4.7,
      ratings_total: 1255,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 39.98,
          currency: "USD",
          raw: "$39.98",
          asin: "B07X9YC983",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
        },
      ],
      price: {
        symbol: "$",
        value: 39.98,
        currency: "USD",
        raw: "$39.98",
        asin: "B07X9YC983",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07206773HG5U4KXL41DH&url=%2FGigastone-High-Speed-Olympus-Panasonic-Digital%2Fdp%2FB07X9YC983%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-1-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      },
    },
    {
      position: 2,
      title:
        "Amplim TF Memory Card 32GB Micro SD SDHC Card Plus Adapter, Cell Phone, Tablet, Camera, 3DS",
      asin: "B07KY3J4B7",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71qdBaVu82L._AC_UY218_.jpg",
      rating: 4.6,
      ratings_total: 442,
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 11.98,
          currency: "USD",
          raw: "$11.98",
          asin: "B07KY3J4B7",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
        },
      ],
      price: {
        symbol: "$",
        value: 11.98,
        currency: "USD",
        raw: "$11.98",
        asin: "B07KY3J4B7",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmemory%2Bcards%26qid%3D1637990034%26sr%3D8-2-spons%26psc%3D1&qualifier=1637990034&id=1776662760669470&widgetName=sp_atf",
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 3,
      title:
        "SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN",
      asin: "B07H9DVLBB",
      link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_UY218_.jpg",
      amazons_choice: {
        link: "https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=ice_ac_b_dpb?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-3&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
        keywords: "memory cards",
      },
      rating: 4.8,
      ratings_total: 112331,
      prices: [
        {
          symbol: "$",
          value: 27.99,
          currency: "USD",
          raw: "$27.99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "$",
          value: 44.99,
          currency: "USD",
          raw: "$44.99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "$",
        value: 27.99,
        currency: "USD",
        raw: "$27.99",
        name: "Primary",
        is_primary: true,
      },
    },
    {
      position: 4,
      title:
        "SAMSUNG EVO Select Micro SD Memory Card with Adapter, 512GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD for Photos, Videos, Music Storage, MB-ME512HA",
      asin: "B0887CHVFF",
      link: "https://www.amazon.com/SAMSUNG-Select-microSDXC-Adapter-MB-ME512HA/dp/B0887CHVFF/ref=sr_1_4?keywords=memory+cards&qid=1637990034&qsid=144-1043968-7388431&sr=8-4&sres=B07H9DVLBB%2CB0887CHVFF%2CB08GYG5SVQ%2CB07FCR3316%2CB08GYG6T12%2CB08TJRVWV1%2CB07H48412Q%2CB08GGFCZPW%2CB09LLXN2X4%2CB08T8LL7G8%2CB07NLY7N7L%2CB09B1J3BK2%2CB08SMNGYRT%2CB07YFGG1SD%2CB09M3ZCH2T%2CB085CNSZMC&srpt=FLASH_MEMORY",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/618Riqqgo3L._AC_UY218_.jpg",
      rating: 4.8,
      ratings_total: 202370,
    },
    {
      position: 5,
      title:
        "Amplim TF Memory Card 32GB Micro SD SDHC Card Plus Adapter, Cell Phone, Tablet, Camera, 3DS",
      asin: "B07KY3J4B7",
      link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      categories: [
        {
          name: "All Departments",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71qdBaVu82L._AC_UL320_.jpg",
      rating: 4.6,
      ratings_total: 442,
      is_carousel: true,
      carousel: {
        title: "Highly rated",
        sub_title: "Based on star rating and number of customer ratings",
        sponsored: true,
        id: "loom-desktop-inline-slot_sptw-highly-rated-na",
        total_items: 4,
      },
      sponsored: true,
      prices: [
        {
          symbol: "$",
          value: 11.98,
          currency: "USD",
          raw: "$11.98",
          name: "$11.98$11.98",
          asin: "B07KY3J4B7",
          link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
        },
      ],
      price: {
        symbol: "$",
        value: 11.98,
        currency: "USD",
        raw: "$11.98",
        name: "$11.98$11.98",
        asin: "B07KY3J4B7",
        link: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_search_thematic_aps_sr_pg1_2?ie=UTF8&adId=A10211002C6QR4T7WSYGI&url=%2FAdapter-MicroSD-Extreme-Amplim-MicroSDHC%2Fdp%2FB07KY3J4B7%2Fref%3Dsxin_12_pa_sp_search_thematic_sspa%3Fcv_ct_cx%3Dmemory%2Bcards%26keywords%3Dmemory%2Bcards%26pd_rd_i%3DB07KY3J4B7%26pd_rd_r%3Db627b8cc-74c8-4915-afa2-ffce56456fea%26pd_rd_w%3D1vVED%26pd_rd_wg%3DPWTqh%26pf_rd_p%3Dfb401969-1dca-4736-bb17-fd1d356224ef%26pf_rd_r%3DVYYTN11QFQFPP3SYMPZ2%26qid%3D1637990034%26sr%3D1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons%26psc%3D1&qualifier=1637990034&id=5551099690907978&widgetName=sp_search_thematic",
      },
    },
  ],
};
