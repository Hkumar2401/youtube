const ChannelSearchCard = ({ data }) => {

  return (
    <div className="flex w-full border-y-[1px] border-zinc-200 dark:border-zinc-800 cursor-pointer">
      <div className="w-2/3 h-fit  flex justify-center py-5 my-5">
        <img
          className="w-1/4 rounded-full"
          src={data?.channel?.avatar[1]?.url}
          alt=""
        />
      </div>

      <div className="w-full my-10 pr-2 ml-10">
        <h1 className="text-2xl text-black dark:text-white">{data?.channel?.title}</h1>
        <div className="flex">
          <p className="text-black dark:text-white">{data?.channel?.username}</p>
          <p className="mx-2 text-black dark:text-white">•</p>
          <p className="text-black dark:text-white">{data?.channel?.stats?.subscribersText}</p>
        </div>

        <p className="py-3 text-black dark:text-white">{data?.channel?.descriptionSnippet}</p>
      </div>
    </div>
  );
};

export default ChannelSearchCard;
