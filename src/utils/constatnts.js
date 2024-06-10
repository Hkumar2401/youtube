export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=";

export const RAPID_SEARCH_SUGGESTIONS_API =
  "https://youtube138.p.rapidapi.com/auto-complete/?hl=en&gl=IN&q=";

export const RAPID_SEARCH_RESULTS_API =
  "https://youtube138.p.rapidapi.com/search/?hl=en&gl=IN&q=";

export const RAPID_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};
