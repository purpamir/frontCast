import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    auth: authSlice,
    cart: cartReducer,
  },
});
