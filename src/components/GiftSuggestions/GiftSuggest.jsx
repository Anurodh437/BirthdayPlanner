import { useState } from "react";
import { Link } from "react-router-dom";

const GiftSuggest = () => {
  const [active, setActive] = useState("photo");

  return (
    <div className="">
      <div className="flex justify-evenly bg-blue-300 mx-12 ">
        <Link
          to="/gifts"
          onClick={() => setActive("photo")}
          className={
            " flex flex-row w-full items-center justify-center space-x-1 p-2" +
            (active === "photo" ? " bg-gray-500  border-2 border-white " : " ")
          }
        >
          <div className="font-semibold text-base text-white">Photo Frames</div>
        </Link>
        <Link
          to="/gifts/mugs"
          onClick={() => setActive("mugs")}
          className={
            " flex flex-row items-center justify-center space-x-1 p-2 w-full" +
            (active === "mugs"
              ? " bg-gray-500 border-2 text-black border-white "
              : "  ")
          }
        >
          <div className="font-semibold text-base text-white">Mugs</div>
        </Link>

        <Link
          to="/gifts/bouquet"
          onClick={() => setActive("bouquet")}
          className={
            " flex flex-row items-center justify-center space-x-1 p-2 w-full" +
            (active === "bouquet"
              ? " bg-gray-500  border-2 border-white "
              : " ")
          }
        >
          <div className="font-semibold text-base text-white">Bouquet</div>
        </Link>

        <Link
          to="/gifts/bdaykit"
          onClick={() => setActive("bdaykit")}
          className={
            " flex flex-row items-center justify-center space-x-1 p-2 w-full" +
            (active === "bdaykit" ? " bg-gray-500  border-2 border-white " : "")
          }
        >
          <div className="font-semibold text-base text-white">Birthday Kit</div>
        </Link>
      </div>
    </div>
  );
};

export default GiftSuggest;
