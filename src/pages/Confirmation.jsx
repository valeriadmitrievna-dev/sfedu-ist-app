import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Loader from "../components/Loader";
import { ConfirmService } from "../services/user";
import { errorMessage } from "../utils";
import { logIn } from "../redux/root";
import { useDispatch } from "react-redux";

export default function Confirmation() {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleConfirm = async () => {
    try {
      const { data } = await ConfirmService(token);
      if (data.error) {
        errorMessage(data.error);
        history.push("/");
      } else {
        localStorage.setItem("access token", data);
        dispatch(logIn());
      }
    } catch (error) {
      errorMessage("Service unavailable");
    }
  };
  useEffect(handleConfirm, []);
  return <Loader />;
}
