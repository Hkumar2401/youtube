import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isDarkMode: true,
    isSidebarOpen: true,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleDarkMode, toggleSidebar } = configSlice.actions;

export default configSlice.reducer;
