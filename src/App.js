import { useRoutes } from "./routes";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { notification } from "antd";

const App = () => {
  const { isAuth } = useSelector(state => state.root);
  const routes = useRoutes(true);

  useEffect(() => {
    process.env.REACT_APP_NODE === "production" &&
      notification.info({
        message: "Test version",
        description:
          "This is test version of project without working with database. Here only used hardcoded data. Wait for updates!",
      });
  }, []);

  return routes;
};

export default App;
