import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserLayout from "./index.layout";
import FullScreenLoader from "../../components/FullScreenLoader";
import { LogoutService, UserDataService } from "../../services/user";
import { deletePicture, logOut, uploadNewPicture } from "../../redux/root";
import { errorMessage, warningMessage } from "../../utils";
import {
  DeletePictureService,
  UploadPictureService,
} from "../../services/picture";

export default function User() {
  const { user } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const params = useParams();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [picLoading, setPicLoading] = useState(false);
  const [isModalOpened, setModalOpened] = useState(false);
  const openModal = () => {
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  const [newPicture, setNewPicture] = useState({});
  const [preview, setPreview] = useState();
  const handleUpdateNewPicture = e => {
    setNewPicture(props => ({
      ...props,
      [e.target.id]: e.target.value,
    }));
  };
  const handleUploadPicture = e => {
    setNewPicture(props => ({
      ...props,
      picture: e.target.files[0],
    }));
    setPreview(window.URL.createObjectURL(e.target.files[0]));
  };
  const handleRemovePicture = () => {
    setNewPicture(props => ({
      ...props,
      picture: undefined,
    }));
    setPreview();
  };
  const handleUploadNewPicture = async () => {
    const formData = new FormData();
    Object.entries(newPicture).forEach(pair => {
      formData.append(pair[0], pair[1]);
    });
    if (!newPicture.title?.length) {
      warningMessage("Picture title is required");
    } else if (!newPicture.picture) {
      warningMessage("Picture is required");
    }
    setPicLoading(true);
    try {
      const { data } = await UploadPictureService(formData);
      if (data.error) {
        throw new Error(data.error);
      } else {
        closeModal();
        setNewPicture({});
        setPreview();
        dispatch(uploadNewPicture(data));
      }
    } catch (error) {
      errorMessage(error.message);
    }
    setPicLoading(false);
  };

  const [isDeleting, setDeleting] = useState(false);
  const handleDeletePicture = async id => {
    try {
      setDeleting(true)
      const res = await DeletePictureService(id);
      if (res.status === 200) {
        dispatch(deletePicture(id));
      } else {
        throw new Error(res.data.error);
      }
    } catch (error) {
      errorMessage(error.message);
    }
    setDeleting(false)
  };

  const handleLogout = async () => {
    try {
      const res = await LogoutService();
      localStorage.removeItem("access token");
      dispatch(logOut());
    } catch (error) {
      console.log(error);
      errorMessage("Service unavailable");
    }
  };

  const handleGetUserData = async () => {
    try {
      const { data } = await UserDataService(params.username);
      if (data.error) {
        throw new Error(data.error);
      } else {
        setProfile(data);
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };

  useEffect(() => {
    if (params.username === user.username) {
      setProfile(user);
    } else {
      handleGetUserData();
    }
    setLoading(false);
  }, [user, params]);

  return loading || !profile ? (
    <FullScreenLoader />
  ) : (
    <UserLayout
      profile={profile}
      user={user}
      handleLogout={handleLogout}
      isModalOpened={isModalOpened}
      openModal={openModal}
      closeModal={closeModal}
      newPicture={newPicture}
      preview={preview}
      handleUpdateNewPicture={handleUpdateNewPicture}
      handleUploadPicture={handleUploadPicture}
      handleRemovePicture={handleRemovePicture}
      handleUploadNewPicture={handleUploadNewPicture}
      picLoading={picLoading}
      handleDeletePicture={handleDeletePicture}
      isDeleting={isDeleting}
    />
  );
}
