import { Link } from "react-router-dom";
import useViewCounter from "../utils/hooks/useViewCounter";

const VideoSearchCard = ({ data }) => {
  // console.log(data);
  // const { video } = data;

  const views = useViewCounter(data?.video?.stats?.views);

  return (
    <Link to={"/watch?v=" + data?.video?.videoId}>
      <div className="flex w-full cursor-pointer my-5">
        <div className="w-2/3">
          <img
            className="w-full rounded-xl"
            src={data?.video?.thumbnails[0].url}
            alt=""
          />
        </div>
        <div className="w-full ml-5">
          <h1 className=" text-2xl text-black dark:text-white pt-2">
            {data?.video?.title}
          </h1>
          <div className="flex">
            <p className="text-black dark:text-white">{views}</p>
            <p className="mx-2 text-black dark:text-white">•</p>
            <p className="text-black dark:text-white">
              {data?.video?.publishedTimeText}
            </p>
          </div>

          <div className="flex items-center my-4">
            <img
              className="w-8 rounded-full"
              src={data?.video?.author?.avatar[0]?.url}
              alt=""
            />
            <p className="ml-2 text-black dark:text-white">
              {data?.video?.author?.title}
            </p>
          </div>

          <div className="mt-4">
            <p className="line-clamp-1 text-black dark:text-white">
              {data?.video?.descriptionSnippet}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoSearchCard;
