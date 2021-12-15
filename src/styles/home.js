import styled from "styled-components";
import { ToggledVisibleContainer } from "./global";

export const Body = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 560px) {
    height: auto;
  }
`;

export const Header = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  /* border-bottom: 0.2rem solid #fff; */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    position: relative;
  }
`;

export const SearchContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;
  max-width: 40rem;
  transition: 0.5s ease-in-out, gap 0.1s;
  max-width: 4rem;
  overflow: hidden;
  width: 35rem;
  input {
    max-width: 0;
    transition: 0.5s;
  }
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  &:focus-within {
    max-width: 100%;
    gap: 1rem;
    input {
      max-width: 100%;
    }
  }
  @media (max-width: 920px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    order: 2;
  }
`;

export const SearchLabel = styled.label`
  width: 2rem;
  height: 2rem;
  display: block;
  svg {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    g {
      fill: rgb(${props => props.theme.mainColorMedium});
    }
  }
`;

export const Search = styled.input`
  font-size: 1.6rem;
  flex-grow: 1;
  color: rgb(${props => props.theme.mainColorMedium});
  &::placeholder {
    color: rgba(${props => props.theme.mainColorMedium}, 0.5);
  }
`;

export const Content = styled.div`
  padding: 2rem;
  overflow-y: auto;
  height: calc(100vh - 8rem);
  @media (max-width: 560px) {
    height: auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 3rem;
  font-family: "Comfortaa", sans-serif;
  svg {
    width: 5rem;
    height: 5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 560px) {
    gap: 0.8rem;
    font-size: 2.2rem;
    svg {
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.2rem;
    }
  }
`;

export const User = styled.div`
  position: relative;
  @media (max-width: 560px) {
    position: static;
  }
`;

export const UserLabel = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  transition: 0.3s;
  ${({ opened }) => opened && "background: rgba(255, 255, 255, 0.2);"}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 560px) {
    padding: 0;
  }
`;

export const UserBody = styled(ToggledVisibleContainer)`
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  right: 0;
  top: calc(100% + 1rem);
  backdrop-filter: blur(0.5rem);
  z-index: 5;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);
  min-width: 100%;
  overflow: hidden;
  min-width: 20rem;
  @media (max-width: 560px) {
    right: 2rem;
    top: 7rem;
    max-width: calc(100vw - 4rem);
    backdrop-filter: none;
    background: rgb(255, 255, 255);
  }
`;

export const UserBodyLink = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  color: #292d32;
  svg {
    width: 2rem;
    height: 2rem;
    path {
      stroke: #292d32;
    }
  }
  font-size: 1.6rem;
  line-height: 2rem;
  font-family: "Comfortaa";
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 560px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const Username = styled.p`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  @media (max-width: 560px) {
    display: none;
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    margin-left: auto;
    position: static;
  }
`;

export const NotificationsButton = styled.button`
  display: block;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  border-radius: 0.8rem;
  transition: 0.3s;
  > svg {
    width: 3rem;
    height: 3rem;
  }
  ${({ opened }) => opened && "background: rgba(255, 255, 255, 0.2);"}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const NotificatiosBody = styled(UserBody)`
  min-width: 36rem;
  overflow-y: auto;
  max-height: 40.4rem;
`;
