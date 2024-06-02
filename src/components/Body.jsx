import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex bg-white dark:bg-black w-full h-screen text-black dark:text-white">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
