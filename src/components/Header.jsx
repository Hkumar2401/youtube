import { useDispatch, useSelector } from "react-redux";
import YoutubeLogo from "../images/youtube-icon.png";
import { toggleDarkMode, toggleSidebar } from "../utils/slices/configSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  RAPID_OPTIONS,
  RAPID_SEARCH_SUGGESTIONS_API,
} from "../utils/constatnts";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searhSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const dispatch = useDispatch();

  const isDarkMode = useSelector((store) => store.config.isDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(
        RAPID_SEARCH_SUGGESTIONS_API + searchText,
        RAPID_OPTIONS
      );
      const data = await res.json();
      setSearchSuggestions(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center text-black dark:text-white dark:bg-black py-2">
      <div className="flex items-center justify-center ml-5">
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="flex flex-col bg-white dark:bg-black p-3 rounded-full cursor-pointer hover:bg-[#e5e5e5] dark:hover:bg-[#272727] active:bg-[#c1c1c1] dark:active:bg-[#555555]  gap-[2px]"
        >
          <div className="w-4 h-[3px] bg-black dark:bg-white rounded-3xl"></div>
          <div className="w-4 h-[3px] bg-black dark:bg-white rounded-3xl"></div>
          <div className="w-4 h-[3px] bg-black dark:bg-white rounded-3xl"></div>
        </div>

        <Link to={"/"}>
          <div className="ml-6 flex items-center justify-center cursor-pointer">
            <img className="w-[32px]" src={YoutubeLogo} alt="" />
            <h1 className="ml-1 font-bold text-[20px] text-black dark:text-white">
              Youtube
            </h1>
            <sup className="text-zinc-500 text-xs ml-1">IN</sup>
          </div>
        </Link>
      </div>

      <div className="flex justify-center flex-col relative">
        <div className="flex justify-center items-center">
          <input
            placeholder="Search"
            className="text-black dark:text-white bg-white  dark:bg-black w-[500px] h-8 p-5 rounded-s-3xl focus:outline focus:outline-blue-400 focus:-outline-offset-1 border-[1px] border-solid border-[#cccccc] dark:border-zinc-700"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setShowSearchSuggestions(false)}
          />
          <button className="bg-[#f0f0f0] hover:bg-[#e5e5e5]  dark:bg-[#222222] dark:hover:bg-[#111111] active:bg-[#c1c1c1] dark:active:bg-[#555555] p-2 w-20 rounded-e-3xl border-[1px] border-s-0 border-solid border-[$cccccc] dark:border-zinc-700">
            <i className="fa-solid fa-magnifying-glass text-black dark:text-white"></i>
          </button>
        </div>
        <div
          className={`bg-white dark:bg-black border-[1px] border-[#f0f0f0] dark:border-[#222222] text-black dark:text-white w-[500px] absolute top-12 py-3 z-50 rounded-lg shadow-2xl ${
            showSearchSuggestions ? "block" : "hidden"
          }`}
        >
          {searhSuggestions?.map((suggestion) => {
            return (
              <Link to="" key={suggestion}>
                <div className="flex px-5 py-1 items-center hover:bg-[#f0f0f0] dark:hover:bg-[#222222]">
                  <i className="fa-solid fa-magnifying-glass text-black dark:text-white mr-4 text-sm"></i>
                  <p className="">{suggestion}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mr-3 flex justify-center items-center">
        <div
          onClick={() => dispatch(toggleDarkMode())}
          className="flex justify-center items-center w-32 text-black dark:text-white bg-[#f0f0f0] hover:bg-[#e5e5e5] dark:bg-[#333333] dark:hover:bg-[#222222] active:bg-[#d5d5d5] dark:active:bg-[#323232] p-2 rounded-lg cursor-pointer mr-6 "
        >
          {isDarkMode ? (
            <>
              <i className="fa-regular fa-moon mr-3 "></i>{" "}
              <h1 className="">Dark Mode</h1>
            </>
          ) : (
            <>
              <i className="fa-regular fa-sun mr-3 "></i>{" "}
              <h1 className="">Light Mode</h1>
            </>
          )}
        </div>
        <div className="w-10 h-10 flex justify-center items-center cursor-pointer bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full">
          <i className="fa-regular fa-user text-black dark:text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
