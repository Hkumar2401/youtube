const PlaylistSearchCard = ({ data }) => {
  console.log(data);

  return (
    <div className="flex w-full cursor-pointer my-5">
      <div className="w-2/3">
        <img
          className="w-full rounded-xl"
          src={
            data?.playlist?.thumbnails[data?.playlist?.thumbnails.length - 1]
              .url
          }
          alt=""
        />
      </div>
      <div className="w-full ml-5">
        <h1 className=" text-2xl text-black dark:text-white pt-2">
          {data?.playlist?.title}
        </h1>

        <div className="flex items-center">
          <p className=" text-black dark:text-white">
            {data?.playlist?.author?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSearchCard;
