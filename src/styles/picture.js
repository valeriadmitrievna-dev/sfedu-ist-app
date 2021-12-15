import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
  &:hover > div {
    opacity: 1;
  }
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const OwnerName = styled.p`
  margin: 0;
  /* margin-top: auto; */
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.6rem;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    ${({ liked, dark }) =>
      liked &&
      `
    path {
        fill: #${dark ? "292d32" : "fff"};
    }
    `}
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem;
  width: fit-content;
`;

export const ModalAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const ModalUserInfo = styled.div`
  font-weight: 600;
  color: #292d32;
  span {
    font-size: 1.2rem;
    line-height: 1;
    font-family: "Comfortaa";
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Comfortaa";
  }
`;

export const ModalContent = styled.div`
  padding: 1.6rem;
  padding-top: 0;
`;

export const ModalPictureSection = styled.div`
  display: flex;
  gap: 1.6rem;
  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

export const ModalPicture = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  width: 50%;
  @media (max-width: 560px) {
    width: auto;
    max-width: 100%;
  }
`;

export const ModalPictureInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalPictureDate = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const ModalPictureTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 0;
`;

export const ModalPictureDescription = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const ModalPictureActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: auto; */
  > div:first-of-type {
    font-size: 2rem;
    svg {
      width: 3rem;
      height: 3rem;
      path {
        stroke: #292d32;
      }
    }
  }
`;
