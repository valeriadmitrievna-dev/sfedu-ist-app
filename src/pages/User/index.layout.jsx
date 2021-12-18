import React from "react";
import * as H from "../../styles/home";
import * as U from "../../styles/user";
import * as S from "../../styles/settings";
import * as P from "../../styles/picture";
import MainHeader from "../../components/MainHeader";
import PicturesGrid from "../../components/PicturesGrid";
import Image from "../../components/Image";
import { ReactComponent as Settings } from "../../assets/setting.svg";
import { ReactComponent as Logout } from "../../assets/turnoff.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Remove } from "../../assets/trash.svg";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Link } from "react-router-dom";
import { Modal, Input } from "antd";
const { TextArea } = Input;

export default function UserLayout({
  profile,
  user,
  handleLogout,
  isModalOpened,
  openModal,
  closeModal,
  newPicture,
  preview,
  handleUpdateNewPicture,
  handleUploadPicture,
  handleRemovePicture,
  handleUploadNewPicture,
  picLoading,
}) {
  return (
    <H.Body>
      {picLoading && <FullScreenLoader />}
      <Modal
        title={<P.ModalTitle>Upload picture</P.ModalTitle>}
        visible={isModalOpened}
        onCancel={closeModal}
        onOk={closeModal}
        centered
        footer={false}
        width={640}
      >
        <P.ModalContent>
          <U.UploadLayout>
            <U.Upload>
              <input
                type="file"
                id="picture"
                accept="image/*"
                onChange={handleUploadPicture}
                value={""}
              />
              {!newPicture.picture && <label htmlFor="picture">Upload</label>}
              {!!newPicture.picture && (
                <U.Preview>
                  <U.Overflow>
                    <Remove onClick={handleRemovePicture} />
                  </U.Overflow>
                  <Image src={preview} />
                </U.Preview>
              )}
            </U.Upload>
            <S.InputGroup>
              <S.Label htmlFor="title">Title</S.Label>
              <input
                type="text"
                id="title"
                placeholder="What is this?"
                value={newPicture.title || ""}
                onChange={handleUpdateNewPicture}
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="description">description</S.Label>
              <TextArea
                placeholder={"How can you describe this picture?"}
                autoSize={{ minRows: 2, maxRows: 6 }}
                type="text"
                id="description"
                value={newPicture.description || ""}
                onChange={handleUpdateNewPicture}
              />
            </S.InputGroup>
            <U.AddPicture onClick={handleUploadNewPicture}>Upload</U.AddPicture>
          </U.UploadLayout>
        </P.ModalContent>
      </Modal>
      <MainHeader owner={profile?.username === user.username} />
      <H.Content>
        <U.InfoSection>
          <U.Avatar>
            <Image src={profile.avatar} />
          </U.Avatar>
          <U.Info>
            <U.InfoText>{profile.name}</U.InfoText>
            <U.InfoLink href={profile.website} target="_blank">
              {profile.website}
            </U.InfoLink>
            <S.Line m={0.1} />
            <U.InfoText>{profile.about}</U.InfoText>
          </U.Info>
        </U.InfoSection>
        <U.Grid>
          {profile.username === user.username && (
            <U.Tools>
              <U.AddPicture onClick={openModal}>
                <Plus />
                Upload picture
              </U.AddPicture>
              <Link to="/settings">
                <U.AddPicture>
                  <Settings />
                  Settings
                </U.AddPicture>
              </Link>
              <U.AddPicture onClick={handleLogout}>
                <Logout />
                Logout
              </U.AddPicture>
            </U.Tools>
          )}

          {!!profile.pictures.length && (
            <>
              <S.Line m={2} />
              <PicturesGrid
                pictures={profile.pictures}
                loading={false}
                breakpoints={{ 0: 1, 320: 2, 768: 3 }}
              />
            </>
          )}
        </U.Grid>
      </H.Content>
    </H.Body>
  );
}
