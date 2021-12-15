import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { notifications } from "../prefabs";
import Image from "./Image";

export default function Notification({ type, image, user }) {
  return (
    <Container>
      <Body>
        {!!image && (
          <Picture>
            <Image src={image} />
          </Picture>
        )}
        <Content>
          <Link to={`/user/${user.short}`}>{user.name}</Link>{" "}
          {notifications[`${type}`]}
        </Content>
      </Body>
      <Date>just now</Date>
    </Container>
  );
}

export const Container = styled.div`
  padding: 2rem;
  padding-bottom: 1rem;
  &:not(:last-child) {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  }
`;

export const Date = styled.p`
  color: #292D32;
  font-size: 1.4rem;
  margin: 0;
  margin-top: 0.5rem;
  text-align: right;
  line-height: 1;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Picture = styled.div`
  width: 5rem;
  height: 5rem;
  flex-basis: 5rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-family: "Comfortaa", sans-serif;
  display: inline;
  flex-grow: 1;
  flex-basis: 0;
  color: #292D32;
  a {
    font-family: "Comfortaa", sans-serif;
    color: rgb(${props => props.theme.mainColorMedium});
    font-weight: 700;
  }
`;
