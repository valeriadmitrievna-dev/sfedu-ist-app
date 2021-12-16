import API from "./api";

export const SignUpService = async creds => {
  try {
    const response = await API.post("/user/signup", creds);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const ConfirmService = async token => {
  try {
    const response = await API.post("/user/confirm", { token });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const LogoutService = async () => {
  try {
    const response = await API.get("/user/logout");
    return response;
  } catch (err) {
    return err.response;
  }
};
