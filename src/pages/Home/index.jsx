import React from "react";
import Logo from "../../components/Logo";
import Waves from "../../components/Waves";
import { Container, GlassContainer, Button } from "../../styles/global";
import * as H from "../../styles/home";

export default function Home() {
  return (
    <Container>
      <Waves />
      <GlassContainer width="40vw">
        <H.Header>
          <H.HeaderLogo>
            <Logo />
          </H.HeaderLogo>
          <H.LogoText>Imagify</H.LogoText>
        </H.Header>
        <H.MainText>
          Welcome to <b>Imagify</b>! This is a service for storing and searching
          images.
        </H.MainText>
        <H.Footer>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </H.Footer>
      </GlassContainer>
    </Container>
  );
}
