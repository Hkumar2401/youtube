import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    popularVideos: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addPopularVideos } = videosSlice.actions;
export default videosSlice.reducer;
