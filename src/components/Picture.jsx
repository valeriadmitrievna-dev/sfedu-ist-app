import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as P from "../styles/picture";
import Image from "./Image";
import { ReactComponent as Close } from "../assets/off_outline_close.svg";
import { ReactComponent as Delete } from "../assets/trash.svg";
import { Modal } from "antd";
import { format } from "date-fns";
import Loader from "./Loader";

export default function PictureLayout({
  picture,
  deletable,
  handleDeletePicture,
  isDeleting,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = e => {
    if (e.target === e.currentTarget) {
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        closeIcon={<Close />}
        title={
          <Link to={`/user/${picture.owner.username}`}>
            <P.ModalTitle>
              <P.ModalAvatar>
                <Image src={picture.owner.avatar} />
              </P.ModalAvatar>
              <P.ModalUserInfo>
                <span>@{picture.owner.username}</span>
                <p>{picture.owner.name}</p>
              </P.ModalUserInfo>
            </P.ModalTitle>
          </Link>
        }
        visible={isModalVisible}
        onCancel={closeModal}
        onOk={closeModal}
        centered
        footer={false}
        width={768}
      >
        <P.ModalContent>
          <P.ModalPictureSection>
            <P.ModalPicture>
              <Image src={picture.source} alt={picture.title} />
            </P.ModalPicture>
            <P.ModalPictureInfo>
              <P.ModalPictureDate>
                {format(new Date(picture.created), "dd.MM.yyyy")}
              </P.ModalPictureDate>
              <P.ModalPictureTitle>{picture.title}</P.ModalPictureTitle>
              <P.ModalPictureDescription>
                {picture.description}
              </P.ModalPictureDescription>
              {/* <P.ModalPictureActions>
                <P.Likes liked={false} dark>
                  <Heart />
                  {picture.likes}
                </P.Likes>
              </P.ModalPictureActions> */}
              {deletable && (
                <P.DeleteBigButton
                  onClick={() => handleDeletePicture(picture._id)}
                >
                  Delete
                </P.DeleteBigButton>
              )}
            </P.ModalPictureInfo>
          </P.ModalPictureSection>
        </P.ModalContent>
      </Modal>
      <P.Container>
        <Image big src={picture.source} alt={picture.title} />
        <P.Overlay onClick={showModal}>
          <P.OwnerName>
            <Link to={`/user/${picture.owner.username}`}>
              @{picture.owner.username}
            </Link>
          </P.OwnerName>
          {deletable && (
            <P.DeleteButton
              className="delete_button"
              onClick={() => handleDeletePicture(picture._id)}
            >
              {isDeleting ? <Loader small /> : <Delete />}
            </P.DeleteButton>
          )}
          {/* <P.Likes liked={true}>
            <Heart />
            {picture.likes}
          </P.Likes> */}
        </P.Overlay>
      </P.Container>
    </>
  );
}
