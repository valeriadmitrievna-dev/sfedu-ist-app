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
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const rootReducer = rootSlice.reducer;
export const { logIn, logOut, setUser } = rootSlice.actions;
export default rootReducer;
