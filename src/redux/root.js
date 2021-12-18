import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    user: null,
    isAuth: !!localStorage.getItem("access token"),
    theme: JSON.parse(localStorage.getItem("theme")) || {
      mainColorDark: "51, 168, 161",
      mainColorMedium: "67, 139, 249",
      mainColorLight: "176, 166, 229",
    },
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
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
    uploadNewPicture: (state, { payload }) => {
      state.user.pictures.push(payload);
    },
  },
});

const rootReducer = rootSlice.reducer;
export const { logIn, logOut, setUser, changeTheme, uploadNewPicture } =
  rootSlice.actions;
export default rootReducer;
