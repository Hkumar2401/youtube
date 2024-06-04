import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import videosSlice from "./slices/videosSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videosSlice,
    search: searchSlice,
  },
});

export default store;
