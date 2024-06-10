import { useRef } from "react";
import Button from "./Button";

const ButtonList = () => {
  // todo : Add Button to left & right of the btn list to scroll

  const rightBtnList = useRef();
  const leftBtnList = useRef();

  const btnListRef = useRef();

  const btnList = [
    "All",
    "Music",
    "Science Fiction",
    "Suits",
    "Manga",
    "Action Thrillers",
    "News",
    "Gaming",
    "Skills",
    "AI",
    "Comic Books",
    "Marvel",
    "Data Structures",
    "JavaScript",
    "Competitive Programming",
    "Namaste React",
    "Akshay Saini"
  ];



  const handleClick = (direction) => {
    if (direction === "left") {
      btnListRef.current.scrollLeft -= 250;
    } else {
      btnListRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-black p-4 flex  items-center justify-between fixed top-14 z-40">
      <div className="px-2 ">
          <button
            onClick={() => handleClick("left")}
            className={`font-bold text-xl py-1 px-3 rounded-full text-black dark:text-white bg-[#ffffff] dark:bg-black hover:bg-[#d5d5d5] dark:hover:bg-[#3f3f3f] active:bg-[#c5c5c5] dark:active:bg-[#2f2f2f]`}
          >
            {"<"}
          </button>
      </div>
      <div ref={btnListRef} className="overflow-hidden flex items-center scroll-smooth scroll-m-6">
        {btnList.map((btn, i) => {
          return <Button key={i} name={btn} />;
        })}
      </div>
      <div className="px-2">
        <button
          onClick={() => handleClick("right")}
          className="font-bold text-xl py-1 px-3 rounded-full text-black dark:text-white bg-[#ffffff] dark:bg-black hover:bg-[#d5d5d5] dark:hover:bg-[#3f3f3f] active:bg-[#c5c5c5] dark:active:bg-[#2f2f2f]"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
