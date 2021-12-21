import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as P from "../styles/picture";
import Image from "./Image";
import { ReactComponent as Close } from "../assets/off_outline_close.svg";
import { Modal } from "antd";
import { format } from "date-fns";

export default function PictureLayout({ picture }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
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
            </P.ModalPictureInfo>
          </P.ModalPictureSection>
        </P.ModalContent>
      </Modal>
      <P.Container onClick={showModal}>
        <Image big src={picture.source} alt={picture.title} />
        <P.Overlay>
          <P.OwnerName>
            <Link to={`/user/${picture.owner.username}`}>
              @{picture.owner.username}
            </Link>
          </P.OwnerName>
          {/* <P.Likes liked={true}>
            <Heart />
            {picture.likes}
          </P.Likes> */}
        </P.Overlay>
      </P.Container>
    </>
  );
}
