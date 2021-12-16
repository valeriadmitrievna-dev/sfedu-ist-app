import React, { useRef } from "react";
import { useState } from "react";
import MainHeaderLayout from "./index.layout";
import useOnClickOutside from "../../hooks/use-click-outside";
import { useDispatch } from "react-redux";
import { LogoutService } from "../../services/user";
import { errorMessage } from "../../utils";
import { logOut } from "../../redux/root";

export default function MainHeader() {
  const dispatch = useDispatch();
  const [isNotificationsOpened, setNotificationsOpened] = useState(false);
  const [isUserBodyOpened, setUserBodyOpened] = useState(false);

  const toggleNotificationsOpened = () => {
    setNotificationsOpened(!isNotificationsOpened);
  };
  const toggleUserBodyOpened = () => {
    setUserBodyOpened(!isUserBodyOpened);
  };

  const notificationsBody = useRef();
  const userBody = useRef();

  useOnClickOutside(notificationsBody, () => setNotificationsOpened(false));
  useOnClickOutside(userBody, () => setUserBodyOpened(false));

  const handleLogout = async () => {
    try {
      const res = await LogoutService();
      localStorage.removeItem("access token");
      dispatch(logOut());
    } catch (error) {
      console.log(error);
      errorMessage("Service unavailable");
    }
  };

  return (
    <MainHeaderLayout
      isNotificationsOpened={isNotificationsOpened}
      toggleNotificationsOpened={toggleNotificationsOpened}
      isUserBodyOpened={isUserBodyOpened}
      toggleUserBodyOpened={toggleUserBodyOpened}
      notificationsBody={notificationsBody}
      userBody={userBody}
      handleLogout={handleLogout}
    />
  );
}
