import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.config.isSidebarOpen);
  console.log(isSidebarOpen);

  return (
    <div className={`${isSidebarOpen ? "w-2/12" : "w-1/12"} bg-teal-200`}>
      Sidebar
    </div>
  );
};

export default Sidebar;
