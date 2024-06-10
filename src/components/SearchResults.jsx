import { useSelector } from "react-redux";
import VideoSearchCard from "./VideoSearchCard";
import ChannelSearchCard from "./ChannelSearchCard";
import PlaylistSearchCard from "./PlaylistSearchCard";

const SearchResults = () => {
  const displaySearchResults = useSelector(
    (store) => store.search.displaySearchResults
  );
  console.log(displaySearchResults);

  return (
    <div className="w-3/4 mt-20 ">
      {displaySearchResults.map((item) => {
        if (item.type === "video") {
          return <VideoSearchCard key={item.video.videoId} data={item} />;
        } else if (item.type === "channel") {
          return <ChannelSearchCard key={item.channel.channelId} data={item} />;
        } else return <PlaylistSearchCard key={item.playlist.playlistId} data={item} />;
      })}
    </div>
  );
};

export default SearchResults;
