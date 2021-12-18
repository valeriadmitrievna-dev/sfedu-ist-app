import React from "react";
import Image from "../../components/Image";
import MainHeader from "../../components/MainHeader";
import * as H from "../../styles/home";
import * as S from "../../styles/settings";
import * as P from "../../styles/picture";
import { ReactComponent as Expand } from "../../assets/expand.svg";
import { Input, Modal, Upload, Collapse } from "antd";
import { Button, ComingSoon } from "../../styles/global";
import ImgCrop from "antd-img-crop";
import useWindowSize from "../../hooks/use-windows-size";
const { TextArea } = Input;
const { Panel } = Collapse;

export default function SettingsLayout({
  user,
  activeTab,
  changeTab,
  theme,
  handleChangeTheme,
  isModalOpened,
  openModal,
  closeModal,
  fileList,
  onChangeFile,
  onPreview,
  profileEdit,
  handleProfileEdit,
  handleUpdateProfile,
}) {
  const { width } = useWindowSize();
  return (
    <H.Body>
      <MainHeader />
      <H.Content>
        {width > 560 && (
          <S.Container>
            <S.Menu>
              <S.MenuItem active={activeTab === 1} onClick={() => changeTab(1)}>
                Edit profile
              </S.MenuItem>
              <S.MenuItem active={activeTab === 2} onClick={() => changeTab(2)}>
                Change password
              </S.MenuItem>
              <S.MenuItem active={activeTab === 3} onClick={() => changeTab(3)}>
                Common settings
              </S.MenuItem>
              <S.MenuItem active={activeTab === 4} onClick={() => changeTab(4)}>
                Help
              </S.MenuItem>
            </S.Menu>
            {activeTab === 1 &&
              efitProfile(
                user,
                fileList,
                onChangeFile,
                onPreview,
                isModalOpened,
                openModal,
                closeModal,
                profileEdit,
                handleProfileEdit,
                handleUpdateProfile
              )}
            {activeTab === 2 && changePassword()}
            {activeTab === 3 && commonSettings(theme, handleChangeTheme)}
            {activeTab === 4 && help()}
          </S.Container>
        )}

        {width <= 560 && (
          <Collapse accordion expandIcon={() => <Expand />}>
            <Panel header="Edit profile" key="0">
              {efitProfile(
                user,
                fileList,
                onChangeFile,
                onPreview,
                isModalOpened,
                openModal,
                closeModal,
                profileEdit,
                handleProfileEdit,
                handleUpdateProfile
              )}
            </Panel>
            <Panel header="Change password" key="1">
              {changePassword()}
            </Panel>
            <Panel header="Common settings" key="2">
              {commonSettings(theme, handleChangeTheme)}
            </Panel>
            <Panel header="Help" key="3">
              {help()}
            </Panel>
          </Collapse>
        )}
      </H.Content>
    </H.Body>
  );
}

const efitProfile = (
  user,
  fileList,
  onChangeFile,
  onPreview,
  isModalOpened,
  openModal,
  closeModal,
  profileEdit,
  handleProfileEdit,
  handleUpdateProfile
) => (
  <S.Content>
    <Modal
      title={<P.ModalTitle>Upload new avatar</P.ModalTitle>}
      visible={isModalOpened}
      onCancel={closeModal}
      onOk={closeModal}
      centered
      footer={false}
      width={320}
    >
      <P.ModalContent>
        <ImgCrop>
          <Upload
            accept="image/*"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChangeFile}
            onPreview={onPreview}
          >
            {fileList.length < 1 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </P.ModalContent>
    </Modal>
    <S.Flex>
      <S.ProfilePhoto>
        <Image src={fileList[0]?.thumbUrl || user.avatar} />
      </S.ProfilePhoto>
      <div>
        <S.SettingsUsername>{user.username}</S.SettingsUsername>
        <S.Change onClick={openModal}>Change profile photo</S.Change>
      </div>
    </S.Flex>
    <S.Line />
    <S.InputGroup>
      <S.Label htmlFor="name">name</S.Label>
      <input
        type="text"
        id="name"
        placeholder={user.name}
        value={profileEdit.name || ""}
        onChange={handleProfileEdit}
      />
    </S.InputGroup>
    <S.InputGroup>
      <S.Label htmlFor="username">username</S.Label>
      <input
        type="text"
        id="username"
        placeholder={user.username}
        value={profileEdit.username || ""}
        onChange={handleProfileEdit}
      />
    </S.InputGroup>
    <S.InputGroup>
      <S.Label htmlFor="website">website</S.Label>
      <input
        type="text"
        id="website"
        placeholder={user.website || "Website"}
        value={profileEdit.website || ""}
        onChange={handleProfileEdit}
      />
    </S.InputGroup>
    <S.InputGroup>
      <S.Label htmlFor="about">about</S.Label>
      <TextArea
        placeholder={user.about || "Few words about yourself"}
        autoSize={{ minRows: 2, maxRows: 4 }}
        type="text"
        id="about"
        value={profileEdit.about || ""}
        onChange={handleProfileEdit}
      />
    </S.InputGroup>
    <Button
      onClick={handleUpdateProfile}
      disabled={
        !Object.values(profileEdit).some(v => v.length > 0) && !fileList[0]
      }
    >
      Save changes
    </Button>
  </S.Content>
);

const changePassword = () => (
  <S.Content>
    <S.InputGroup>
      <S.Label htmlFor="old_password">Old password</S.Label>
      <input type="password" id="old_password" autoComplete="off" />
    </S.InputGroup>
    <S.InputGroup>
      <S.Label htmlFor="old_password">new password</S.Label>
      <input type="password" id="new_password" />
    </S.InputGroup>
    <S.InputGroup>
      <S.Label htmlFor="repeat_password">repeat password</S.Label>
      <input type="password" id="repeat_password" />
    </S.InputGroup>
    <Button>Save changes</Button>
  </S.Content>
);

const commonSettings = (theme, handleChangeTheme) => {
  const themes = [
    {
      mainColorDark: "51, 168, 161",
      mainColorMedium: "67, 139, 249",
      mainColorLight: "176, 166, 229",
    },
    {
      mainColorDark: "173, 83, 137",
      mainColorMedium: "60, 16, 83",
      mainColorLight: "60, 16, 83",
    },
    {
      mainColorDark: "253, 200, 48",
      mainColorMedium: "243, 115, 53",
      mainColorLight: "243, 115, 53",
    },
    {
      mainColorDark: "17, 153, 142",
      mainColorMedium: "17, 153, 142",
      mainColorLight: "56, 239, 125",
    },
  ];
  return (
    <S.Content>
      <S.Title>Choose theme</S.Title>
      <S.Flex>
        {themes.map(t => (
          <S.Theme
            dark={t.mainColorDark}
            light={t.mainColorLight}
            active={JSON.stringify(t) === JSON.stringify(theme)}
            onClick={() => handleChangeTheme(t)}
          />
        ))}
      </S.Flex>
      <S.Line />
      <S.Title>Language</S.Title>
      <S.Flex>Coming soon!</S.Flex>
    </S.Content>
  );
};

const help = () => <ComingSoon>Coming soon!</ComingSoon>;
