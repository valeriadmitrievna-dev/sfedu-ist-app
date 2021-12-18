import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Waves from "./components/Waves.jsx";
import Index from "./pages/Index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home/index.jsx";
import Settings from "./pages/Settings/index.jsx";
import User from "./pages/User/index.jsx";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/user/:username">
            <User />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
  return (
    <>
      <Waves />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/user/confirm/:token">
          <Confirmation />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};
