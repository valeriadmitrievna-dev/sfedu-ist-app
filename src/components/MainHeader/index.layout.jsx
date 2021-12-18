import React from "react";
import * as H from "../../styles/home";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Logo } from "../../assets/whitedlogo.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Settings } from "../../assets/setting.svg";
import { ReactComponent as Logout } from "../../assets/turnoff.svg";
import Notification from "../Notification";
import Image from "../Image";
import { users } from "../../prefabs";
import { Link } from "react-router-dom";

export default function MainHeaderLayout({
  isNotificationsOpened,
  toggleNotificationsOpened,
  isUserBodyOpened,
  toggleUserBodyOpened,
  notificationsBody,
  userBody,
  handleLogout,
  user,
  owner,
  location,
}) {
  return (
    <H.Header>
      <Link to="/home">
        <H.Logo>
          <Logo />
          Imagify
        </H.Logo>
      </Link>
      {!location.pathname.includes("user") && !location.pathname.includes("settings") && (
        <H.SearchContainer>
          <H.SearchLabel htmlFor="search">
            <Search />
          </H.SearchLabel>
          <H.Search placeholder="Search" id="search" />
        </H.SearchContainer>
      )}
      {/* <H.Notifications ref={notificationsBody}>
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
      </H.Notifications> */}
      {!owner && (
        <H.User ref={userBody}>
          <H.UserLabel opened={isUserBodyOpened} onClick={toggleUserBodyOpened}>
            <H.Avatar>
              <Image src={user.avatar} />
            </H.Avatar>
            <H.Username>{user.name}</H.Username>
          </H.UserLabel>
          <H.UserBody opened={isUserBodyOpened}>
            <Link to={`/user/${user.username}`}>
              <H.UserBodyLink>
                <User /> Profile
              </H.UserBodyLink>
            </Link>
            <Link to="/settings">
              <H.UserBodyLink>
                <Settings /> Settings
              </H.UserBodyLink>
            </Link>
            <H.UserBodyLink onClick={handleLogout}>
              <Logout /> Log out
            </H.UserBodyLink>
          </H.UserBody>
        </H.User>
      )}
    </H.Header>
  );
}
