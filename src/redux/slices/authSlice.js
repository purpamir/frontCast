import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
const initialState = {
  token: localStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.loading = false;
        state.token = token;
        localStorage.setItem("token", token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const userLogin = createAsyncThunk("/auth/login", async (body) => {
  const res = await api.post("users/login", body);
  return res.data;
});
export default authSlice.reducer;
