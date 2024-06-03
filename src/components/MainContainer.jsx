import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {

  const isSidebarOpen = useSelector(store => store.config.isSidebarOpen);
  
  return (
    <div className={`h-fit bg-white dark:bg-black p-4 flex flex-col gap-6 ${isSidebarOpen && "blur-sm pointer-events-none select-none"}`}>
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
