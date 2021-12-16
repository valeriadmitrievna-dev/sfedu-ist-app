import React from "react";
import * as H from "../../styles/home";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Logo } from "../../assets/whitedlogo.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Logout } from "../../assets/turnoff.svg";
import Notification from "../Notification";
import Image from "../Image";
import { users } from "../../prefabs";

export default function MainHeaderLayout({
  isNotificationsOpened,
  toggleNotificationsOpened,
  isUserBodyOpened,
  toggleUserBodyOpened,
  notificationsBody,
  userBody,
  handleLogout,
}) {
  return (
    <H.Header>
      <H.Logo>
        <Logo />
        Imagify
      </H.Logo>
      <H.SearchContainer>
        <H.SearchLabel htmlFor="search">
          <Search />
        </H.SearchLabel>
        <H.Search placeholder="Search" id="search" />
      </H.SearchContainer>
      <H.Notifications ref={notificationsBody}>
        <H.NotificationsButton
          opened={isNotificationsOpened}
          onClick={toggleNotificationsOpened}
        >
          <Bell />
        </H.NotificationsButton>
        <H.NotificatiosBody opened={isNotificationsOpened}>
          {users.map((u, id) => (
            <Notification
              key={id}
              user={u}
              image={u.avatar}
              type={
                (id === 0 && "follower") ||
                (id === 1 && "post") ||
                (id === 2 && "like")
              }
            />
          ))}
        </H.NotificatiosBody>
      </H.Notifications>
      <H.User ref={userBody}>
        <H.UserLabel opened={isUserBodyOpened} onClick={toggleUserBodyOpened}>
          <H.Avatar>
            <Image src="https://sun9-66.userapi.com/impg/eYHwUdFFb8LDHg2sR0aglcxKq9Pz10btuKy18w/sKVRDjXOM_8.jpg?size=1600x1200&quality=96&sign=d1757ee002e6956aff055b3f6d5c7800&type=album" />
          </H.Avatar>
          <H.Username>Stitch the Cat</H.Username>
        </H.UserLabel>
        <H.UserBody opened={isUserBodyOpened}>
          <H.UserBodyLink>
            <User /> Profile
          </H.UserBodyLink>
          <H.UserBodyLink onClick={handleLogout}>
            <Logout /> Log out
          </H.UserBodyLink>
        </H.UserBody>
      </H.User>
    </H.Header>
  );
}
