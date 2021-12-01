import "./gift.scss";
import FrameCard from "../../../components/GiftsCard/FrameCard";
import MugCard from "../../../components/GiftsCard/MugCard";
import BouquetCard from "../../../components/GiftsCard/BouquetCard";
import BdayKitCard from "../../../components/GiftsCard/BdayKitCard";
import GiftSuggest from "../../../components/GiftSuggestions/GiftSuggest";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";

const Gifts = () => {
  return (
    <div className="">
      <div className="gift h-screen">
        <div className="p-3">
          <Link
            to="/planBirthday"
            className="flex w-20 px-3 justify-center py-1 bg-gray-400"
          >
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-col lg:p-44 md:p-36 p-16">
          <h1 className="awes text-4xl mt-4 pb-2 lg:text-7xl sm:text-lg md:text-5xl text-white">
            Awesome Gifts
            <br />
            For your Loved Once
          </h1>
          <p className="awes text-blue-400 text-xl pb-3">
            Create Happiness by gifting your loved once.
          </p>
          <a href="#gifts">
            <button className="font-sans p-2 w-28 mt-2 ml-2 rounded-sm text-lg bg-red-600">
              Buy Gifts
            </button>
          </a>
        </div>
      </div>

      {/* gifts card section */}
      <div id="gifts" className="antialiased down-bg text-white font-sans p-6">
        <h1 className="flex text-white justify-center text-3xl">
          Find Unique Presents and gifts, Here!
        </h1>
        <h1 className="text-white text-center font-semibold text-xl mt-4">
          Here's Some Suggested gifts:-
        </h1>
        {/* suggestions */}
        <div className="">
          <GiftSuggest />
        </div>

        <div className="container mx-auto">
          <div className="">
            {/* card1 mapping */}
            <Route exact path="/gifts">
              <Redirect to="/gifts" />
            </Route>
            <Route exact path="/gifts">
              <FrameCard />
            </Route>
            <Route exact path="/gifts/mugs">
              <MugCard />
            </Route>
            <Route exact path="/gifts/bouquet">
              <BouquetCard />
            </Route>
            <Route exact path="/gifts/bdaykit">
              <BdayKitCard />
            </Route>
            {/* <FrameCard/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
