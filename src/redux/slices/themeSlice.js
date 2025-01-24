import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")),
};
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
    },
  },
});
export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
