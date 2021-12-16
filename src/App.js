import { useRoutes } from "./routes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { GlobalStyle } from "./styles/global";
import { errorMessage } from "./utils";
import { UserService } from "./services/user";
import { useDispatch } from "react-redux";
import { logOut, setUser } from "./redux/root";
import FullScreenLoader from "./components/FullScreenLoader";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { isAuth, user, theme } = useSelector(state => state.root);
  const routes = useRoutes(isAuth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const { data } = await UserService();
      if (data.user) {
        dispatch(setUser(data.user));
      } else throw new Error(data.error);
    } catch (error) {
      errorMessage(error.message || "Service unuvailable");
      localStorage.removeItem("access token");
      dispatch(logOut());
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth]);

  useEffect(() => {
    process.env.REACT_APP_NODE === "production" &&
      notification.info({
        message: "Test version",
        description:
          "This is test version of project without working with database. Here only used hardcoded data. Wait for updates!",
      });
  }, []);

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
