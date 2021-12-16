import React from "react";
import { Button, GlassContainer } from "../../styles/global";
import * as I from "../../styles";
import * as A from "../../styles/auth";

export default function SignInLayout({
  credentials,
  handleUpdateCredentials,
  handleSubmit,
}) {
  return (
    <GlassContainer>
      <I.Header>
        <I.LogoText>Sign In</I.LogoText>
      </I.Header>
      <A.Form onSubmit={handleSubmit}>
        <A.InputGroup>
          <A.Label htmlFor="username">username</A.Label>
          <input
            type="text"
            id="username"
            value={credentials?.username || ""}
            onChange={handleUpdateCredentials}
          />
        </A.InputGroup>
        <A.InputGroup>
          <A.Label htmlFor="password">Password</A.Label>
          <input
            type="password"
            id="password"
            value={credentials?.password || ""}
            onChange={handleUpdateCredentials}
          />
        </A.InputGroup>
        <Button>Submit</Button>
      </A.Form>
    </GlassContainer>
  );
}
