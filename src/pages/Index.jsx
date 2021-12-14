import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { GlassContainer, Button } from "../styles/global";
import * as I from "../styles";

export default function Index() {
  return (
    <GlassContainer>
      <I.Header>
        <I.HeaderLogo>
          <Logo />
        </I.HeaderLogo>
        <I.LogoText>Imagify</I.LogoText>
      </I.Header>
      <I.MainText>
        Welcome to <b>Imagify</b>! This is a service for storing and searching
        images.
      </I.MainText>
      <I.Footer>
        <Link to="/signin">
          <Button>Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </I.Footer>
    </GlassContainer>
  );
}
