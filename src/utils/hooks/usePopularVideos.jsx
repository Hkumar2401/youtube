import { useEffect } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_POPULAR_VIDEOS_API } from "../constatnts";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../slices/videosSlice";

const usePopularVideos = () =>{

    const dispatch = useDispatch();

    const getPopularVideos = async () =>{
        const res = await fetch(YOUTUBE_POPULAR_VIDEOS_API + YOUTUBE_API_KEY);
        const data = await res.json();
        dispatch(addPopularVideos(data.items));
    }
    
    useEffect(()=>{
        getPopularVideos();
    },[]);
    
}

export default usePopularVideos;