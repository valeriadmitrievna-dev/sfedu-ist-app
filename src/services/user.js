import API from "./api";

export const SignUpService = async creds => {
  try {
    const response = await API.post("/user/signup", creds);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const SignInService = async creds => {
  try {
    const response = await API.post("/user/signin", creds);
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

export const UserService = async () => {
  try {
    const response = await API.get("/user");
    return response;
  } catch (err) {
    return err.response;
  }
};

export const UserDataService = async username => {
  try {
    const response = await API.get(`/user/${username}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const UpdateUserService = async formData => {
  try {
    const response = await API.put("/user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
