import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    user: null,
    isAuth: !!localStorage.getItem("access token"),
  },
  reducers: {
    logIn: state => {
      state.isAuth = true;
    },
  },
});

const rootReducer = rootSlice.reducer;
export const { logIn } = rootSlice.actions;
export default rootReducer;
