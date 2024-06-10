import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cachedSearchSuggestions: {},
    cachedSearchResults : {},
    displaySearchResults : [],
  },
  reducers: {
    addCacheSearchSuggestions: (state, action) => {
      state.cachedSearchSuggestions = {...state.cachedSearchSuggestions, ...action.payload};
    },
    addCacheSearchResults : (state, action) =>{
      state.cachedSearchResults = {...state.cachedSearchResults, ...action.payload};
    },
    addDisplaySearchResults : (state, action)=>{
      state.displaySearchResults = action.payload;
    }
  },
});

export const { addCacheSearchSuggestions, addCacheSearchResults, addDisplaySearchResults } = searchSlice.actions;
export default searchSlice.reducer;
