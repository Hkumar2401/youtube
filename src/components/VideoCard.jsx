import useDaysConverter from "../utils/hooks/useDaysConverter";

const VideoCard = ({ data }) => {
  const { id, snippet, statistics, contentDetails } = data;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;


  const totalDays = useDaysConverter(publishedAt);

  return (
    <div className="w-full h-full bg-white dark:bg-black cursor-pointer ">
      <div className="image w-full relative">
        <p className="text-sm bg-black text-white p-1 bg-opacity-70 select-none absolute right-2 bottom-8">{duration.replace('PT', '').replace('M', ' : ').replace('S', '')}</p>
        <img className="w-full rounded-xl" src={thumbnails.high.url} alt="" />
      </div>

      <div className="details py-2">
        <h1 className="line-clamp-2 text-black dark:text-white">{title}</h1>
        <h2 className="font-bold text-black dark:text-white">{channelTitle}</h2>
        <div className="flex">
          <h2 className="text-black dark:text-white">{viewCount}</h2>
          <p className="mx-2 text-black dark:text-white">•</p>
          <h2 className="text-black dark:text-white">
            {totalDays} {totalDays > 1 ? " days ago" : " day ago"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
