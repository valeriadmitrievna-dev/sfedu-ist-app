import React from "react";
import { Button, GlassContainer } from "../../styles/global";
import * as I from "../../styles";
import * as A from "../../styles/auth";

export default function SignInLayout() {
  return (
    <GlassContainer>
      <I.Header>
        <I.LogoText>Sign In</I.LogoText>
      </I.Header>
      <A.Form>
        <A.InputGroup>
          <A.Label htmlFor="email">Email</A.Label>
          <input type="text" id="email" />
        </A.InputGroup>
        <A.InputGroup>
          <A.Label htmlFor="password">Password</A.Label>
          <input type="password" id="password" />
        </A.InputGroup>
        <Button>Submit</Button>
      </A.Form>
    </GlassContainer>
  );
}
