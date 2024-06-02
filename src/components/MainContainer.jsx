import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {

  const isSidebarOpen = useSelector(store => store.config.isSidebarOpen);
  
  return (
    <div className={`${isSidebarOpen ? "w-10/12" : "w-11/12"} bg-slate-300 p-4 flex flex-col gap-6`}>
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
