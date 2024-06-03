import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isDarkMode: true,
    isSidebarOpen: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state, action) =>{
      state.isSidebarOpen = false;
    }
  },
});

export const { toggleDarkMode, toggleSidebar, closeSidebar} = configSlice.actions;

export default configSlice.reducer;
