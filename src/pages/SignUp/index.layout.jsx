import React from "react";
import { Button, GlassContainer } from "../../styles/global";
import * as I from "../../styles";
import * as A from "../../styles/auth";

export default function SignUpLayout({
  isSended,
  credentials,
  handleUpdateCredentials,
  handleSubmit,
}) {
  return (
    <GlassContainer>
      <A.Container sended={isSended}>
        <I.Header>
          <I.LogoText>Sign Up</I.LogoText>
        </I.Header>
        <A.Form onSubmit={handleSubmit}>
          <A.InputGroup>
            <A.Label htmlFor="email">email</A.Label>
            <input
              type="text"
              id="email"
              value={credentials?.email || ""}
              onChange={handleUpdateCredentials}
            />
          </A.InputGroup>
          <A.InputGroup>
            <A.Label htmlFor="name">name</A.Label>
            <input
              type="text"
              id="name"
              value={credentials?.name || ""}
              onChange={handleUpdateCredentials}
            />
          </A.InputGroup>
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
            <A.Label htmlFor="password">password</A.Label>
            <input
              type="password"
              id="password"
              value={credentials?.password || ""}
              onChange={handleUpdateCredentials}
            />
          </A.InputGroup>
          <Button>Submit</Button>
        </A.Form>
        {isSended && <p>Check your email to confirm account.</p>}
      </A.Container>
    </GlassContainer>
  );
}
