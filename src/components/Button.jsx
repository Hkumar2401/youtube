const Button = ({ name }) => {
  return (
    <div className="p-1 px-3 cursor-pointer flex items-center rounded-xl min-w-fit h-full bg-[#e0e0e0] dark:bg-[#3f3f3f] hover:bg-[#d5d5d5]   dark:hover:bg-[#5f5f5f] active:bg-[#d5d5d5] dark:active:bg-[#313131] mx-2">
      <button className="text-black dark:text-white">{name}</button>
    </div>
  );
};

export default Button;
