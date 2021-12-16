import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/root";
import SettingsLayout from "./index.layout";

export default function Settings() {
  const { user, theme } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(3);

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
    />
  );
}
