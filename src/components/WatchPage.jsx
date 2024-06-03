import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/slices/configSlice";
import { useEffect } from "react";

const WatchPage = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(store => store.config.isSidebarOpen);

  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");

  useEffect(()=>{
    dispatch(closeSidebar());

  },[]);

  return (
    <div className={`p-5 w-full ${isSidebarOpen && "blur-sm pointer-events-none select-none"}`}>
      <iframe
        width="1400"
        height="700"
        src={"https://www.youtube.com/embed/"+params+"?si=PPHONHhqrWRBxLnH&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
