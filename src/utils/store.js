import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import videosSlice from "./slices/videosSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    video: videosSlice,
  },
});

export default store;
