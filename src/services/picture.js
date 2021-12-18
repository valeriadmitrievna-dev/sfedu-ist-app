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
