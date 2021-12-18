import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, setUser } from "../../redux/root";
import { UpdateUserService } from "../../services/user";
import { errorMessage, successMessage } from "../../utils";
import SettingsLayout from "./index.layout";

export default function Settings() {
  const { user, theme } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpened, setModalOpened] = useState(false);
  const openModal = () => {
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
  };

  const [profileEdit, setProfileEdit] = useState({});
  const handleProfileEdit = e => {
    setProfileEdit(props => ({
      ...props,
      [e.target.id]: e.target.value,
    }));
  };
  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("avatar", fileList[0]?.originFileObj);
    Object.entries(profileEdit).forEach(pair => {
      formData.append(pair[0], pair[1]);
    });
    try {
      const { data } = await UpdateUserService(formData);
      if (!data.error) {
        dispatch(setUser(data.user));
        successMessage("Successfully updated");
      } else {
        errorMessage(data.error);
      }
      setProfileEdit({});
      setFileList([]);
    } catch (error) {
      errorMessage(error.message);
    }
  };

  const [fileList, setFileList] = useState([]);

  const onChangeFile = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const changeTab = tab => setActiveTab(tab);
  const handleChangeTheme = t => {
    dispatch(changeTheme(t));
    localStorage.setItem("theme", JSON.stringify(t));
  };

  return (
    <SettingsLayout
      user={user}
      activeTab={activeTab}
      changeTab={changeTab}
      theme={theme}
      handleChangeTheme={handleChangeTheme}
      isModalOpened={isModalOpened}
      openModal={openModal}
      closeModal={closeModal}
      fileList={fileList}
      onChangeFile={onChangeFile}
      onPreview={onPreview}
      profileEdit={profileEdit}
      handleProfileEdit={handleProfileEdit}
      handleUpdateProfile={handleUpdateProfile}
    />
  );
}
