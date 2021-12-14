import { useRoutes } from "./routes";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuth } = useSelector(state => state.root);
  const routes = useRoutes(true);
  return routes;
};

export default App;
