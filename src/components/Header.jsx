import YoutubeLogo from "../images/youtube-icon.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-black dark:text-white dark:bg-black py-2">
      <div className="flex items-center justify-center ml-5">
        <div className="flex flex-col bg-white dark:bg-black p-3 rounded-full cursor-pointer hover:bg-[#e5e5e5] dark:hover:bg-[#272727]">
          <div className="w-4 h-[3px] bg-black dark:bg-white my-[1px]"></div>
          <div className="w-4 h-[3px] bg-black dark:bg-white my-[1px]"></div>
          <div className="w-4 h-[3px] bg-black dark:bg-white my-[1px]"></div>
        </div>
        <div className="ml-6 flex items-center justify-center cursor-pointer">
          <img className="w-[32px]" src={YoutubeLogo} alt="" />
          <h1 className="ml-1 font-bold text-[20px]">Youtube</h1>
          <sup className="text-zinc-500 text-xs ml-1">IN</sup>
        </div>
      </div>

      <div className="flex justify-center  items-center">
        <input placeholder="Search" className="bg-white dark:bg-black w-[500px] h-8 p-5 rounded-s-3xl focus:outline focus:outline-blue-400 focus:-outline-offset-1 border-[1px] border-solid border-[#cccccc] dark:border-zinc-700" type="text" />
        <button className="bg-[#f0f0f0] dark:bg-[#222222] p-2 w-20 hover:bg-[#e5e5e5] dark:hover:bg-[#111111] rounded-e-3xl border-[1px] border-s-0 border-solid border-[$cccccc] dark:border-zinc-700"><i class="fa-solid fa-magnifying-glass"></i> </button>
      </div>

      <div className="mr-3">
        <div className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-700 bg-gray-500 rounded-full"><i class="fa-regular fa-user"></i></div>
      </div>
    </div>
  );
};

export default Header;
