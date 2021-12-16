import React, { useState } from "react";
import { errorMessage, warningMessage } from "../../utils";
import SignUpLayout from "./index.layout";
import { isEmail } from "validator";
import { SignUpService } from "../../services/user";

export default function SignUp() {
  const [credentials, setCredentials] = useState({});
  const [isSended, setSended] = useState(false);

  const handleUpdateCredentials = e => {
    setCredentials(props => ({
      ...props,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(credentials);
    if (!credentials.email?.trim().length) {
      warningMessage("Email is required");
    } else if (!isEmail(credentials.email)) {
      warningMessage("Email is invalid");
    }  else if (!credentials.name?.trim().length) {
      warningMessage("Name is required");
    } else if (!credentials.username?.trim().length) {
      warningMessage("Username is required");
    } else if (credentials.username?.length < 6) {
      warningMessage("Username length should be 6 or greater");
    } else if (!credentials.username?.match(/^[a-z0-9_]+$/i)) {
      warningMessage(
        "Username can contain only letters, numbers and underscore"
      );
    } else if (!credentials.password?.trim().length) {
      warningMessage("Password is required");
    } else if (credentials.password?.length < 6) {
      warningMessage("Password length should be 6 or greater");
    } else {
      try {
        const { data } = await SignUpService(credentials);
        if (data.success) {
          setSended(true);
        } else {
          errorMessage(data.error);
        }
      } catch (error) {
        errorMessage("Service unavailable");
      }
    }
  };

  return (
    <SignUpLayout
      isSended={isSended}
      credentials={credentials}
      handleUpdateCredentials={handleUpdateCredentials}
      handleSubmit={handleSubmit}
    />
  );
}
