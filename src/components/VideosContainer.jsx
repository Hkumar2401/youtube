import { useSelector } from "react-redux";
import usePopularVideos from "../utils/hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  usePopularVideos();

  const popularVideos = useSelector((store) => store.video.popularVideos);

  if (popularVideos === null) return;
  return (
    <div className="w-full h-full p-5  flex flex-wrap mt-32">
      {popularVideos.map((video) => {
        return (
          <Link
            className="w-[19%] h-[450px] mb-5 mx-[7px]"
            to={"watch?v=" + video.id}
            key={video.id}
          >
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideosContainer;
