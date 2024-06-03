import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.config.isSidebarOpen);

  return (
    <div className={`${isSidebarOpen ? "visible" : "hidden"}  w-2/12 h-full z-40 shadow-2xl absolute bg-white dark:bg-black`}>
      <div>
        <h1>Sidebar</h1>
      </div>
    </div>
  );
};

export default Sidebar;
