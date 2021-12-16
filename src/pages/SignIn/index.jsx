import React, { useState } from "react";
import { SignInService } from "../../services/user";
import { errorMessage, warningMessage } from "../../utils";
import SignInLayout from "./index.layout";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/root";

export default function SignIn() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({});

  const handleUpdateCredentials = e => {
    setCredentials(props => ({
      ...props,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!credentials.username?.trim().length) {
      warningMessage("Username is required");
    } else if (!credentials.password?.trim().length) {
      warningMessage("Password is required");
    } else {
      try {
        const { data } = await SignInService(credentials);
        if (data?.token) {
          localStorage.setItem("access token", data.token);
          dispatch(logIn());
        } else {
          errorMessage(data.error);
        }
      } catch (error) {
        errorMessage("Service unavailable");
      }
    }
  };
  return (
    <SignInLayout
      credentials={credentials}
      handleUpdateCredentials={handleUpdateCredentials}
      handleSubmit={handleSubmit}
    />
  );
}
