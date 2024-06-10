const SearchSuggestion = ({ suggestion }) => {
  return (
    <div className="flex px-5 py-1 items-center hover:bg-[#f0f0f0] dark:hover:bg-[#222222]">
      <i className="fa-solid fa-magnifying-glass text-black dark:text-white mr-4 text-sm"></i>
      <p className="">{suggestion}</p>
    </div>
  );
};

export default SearchSuggestion;
