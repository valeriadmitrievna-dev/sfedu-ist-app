import React, { useRef } from "react";
import { useState } from "react";
import MainHeaderLayout from "./index.layout";
import useOnClickOutside from "../../hooks/use-click-outside";

export default function MainHeader() {
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

  return (
    <MainHeaderLayout
      isNotificationsOpened={isNotificationsOpened}
      toggleNotificationsOpened={toggleNotificationsOpened}
      isUserBodyOpened={isUserBodyOpened}
      toggleUserBodyOpened={toggleUserBodyOpened}
      notificationsBody={notificationsBody}
      userBody={userBody}
    />
  );
}
