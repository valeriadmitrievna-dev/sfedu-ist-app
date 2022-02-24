import { useRoutes } from "./routes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { errorMessage } from "./utils";
import { UserService } from "./services/user";
import { useDispatch } from "react-redux";
import { logOut, setUser } from "./redux/root";
import FullScreenLoader from "./components/FullScreenLoader";
import { ThemeProvider } from "styled-components";
import API from "./services/api";

const App = () => {
  const { isAuth, user, theme } = useSelector(state => state.root);
  const routes = useRoutes(isAuth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const { data } = await UserService();
      if (!data.error) {
        dispatch(setUser(data));
      } else throw new Error(data.error);
    } catch (error) {
      errorMessage(error.message || "Service unuvailable");
      localStorage.removeItem("access token");
      dispatch(logOut());
    }
    setLoading(false);
  };

  const testSetConnection = async () => {
    try {
      const data = await API.get("/");
      console.log(data);
    } catch (error) {
      console.log("Error trying to connect to the API:");
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isAuth) {
      fetchUserData();
    }
    testSetConnection();
  }, [isAuth]);

  return (
    <ThemeProvider
      theme={{
        mainColorDark: theme.mainColorDark,
        mainColorMedium: theme.mainColorMedium,
        mainColorLight: theme.mainColorLight,
        textColor: "#fff",
        wavesColor: "255, 255, 255",
      }}
    >
      <GlobalStyle />
      {loading || (isAuth && !user) ? <FullScreenLoader /> : routes}
    </ThemeProvider>
  );
};

export default App;
