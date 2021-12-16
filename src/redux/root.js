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
    logOut: state => {
      state.isAuth = false;
    },
  },
});

const rootReducer = rootSlice.reducer;
export const { logIn, logOut } = rootSlice.actions;
export default rootReducer;
