import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cachedSearchSuggestions: {},
  },
  reducers: {
    addCacheSearchSuggestions: (state, action) => {
      state.cachedSearchSuggestions = {...state.cachedSearchSuggestions, ...action.payload};
    },
  },
});

export const { addCacheSearchSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
