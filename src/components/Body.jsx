import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex bg-white dark:bg-black w-full h-full text-black dark:text-white">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
