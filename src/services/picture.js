import API from "./api";

export const UploadPictureService = async formData => {
  try {
    const response = await API.post("/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const GetPicturesLengthService = async () => {
  try {
    const response = await API.get("/picture/length");
    return response;
  } catch (err) {
    return err.response;
  }
};

export const GetPicturesService = async (count, page) => {
  try {
    const response = await API.get(`/picture/${count}/${page}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
