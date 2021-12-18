import styled from "styled-components";
import { Button } from "./global";

export const Content = styled.div`
  padding: 2rem;
  overflow-y: auto;
  height: calc(100vh - 7.5rem);
  @media (max-width: 560px) {
    height: auto;
  }
`;

export const InfoSection = styled.div`
  max-width: 768px;
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  grid-template-columns: 18rem 1fr;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Avatar = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 5px solid #fff;
  /* box-shadow: -5px 5px 0 0 rgba(255, 255, 255, 0.4),
    -10px 10px 0 0 rgba(255, 255, 255, 0.3); */
  @media (max-width: 640px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const Info = styled.div`
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;
  flex-grow: 1;
  align-self: stretch;
  @media (max-width: 640px) {
    padding: 2rem;
    width: 100%;
  }
`;

export const InfoText = styled.p`
  margin: 0;
  font-family: "Comfortaa";
  &:first-child {
    font-weight: bold;
  }
  font-size: 1.6rem;
`;

export const InfoLink = styled.a`
  font-family: "Comfortaa";
  font-size: 1.6rem;
  color: rgb(${props => props.theme.mainColorMedium});
  &:hover {
    color: rgb(${props => props.theme.mainColorMedium});
  }
  font-weight: bold;
  @media (max-width: 540px) {
    word-break: break-all;
  }
`;

export const Grid = styled(InfoSection)`
  display: block;
  margin-top: 2rem;
`;

export const Tools = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const AddPicture = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    path {
      transition: 0.3s;
      stroke: rgb(${props => props.theme.mainColorMedium});
    }
  }
  &:hover svg path {
    stroke: #fff;
  }
`;

export const UploadLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input,
  textarea {
    max-width: 100%;
    border-color: rgba(${props => props.theme.mainColorMedium}, 1) !important;
    color: rgba(${props => props.theme.mainColorMedium}, 1);
    &::placeholder {
      color: rgba(${props => props.theme.mainColorMedium}, 0.5);
    }
  }
  label {
    font-weight: 500;
  }
`;

export const Upload = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 12rem;
    background: rgba(${props => props.theme.mainColorMedium}, 0.3);
    border: 2px solid rgba(${props => props.theme.mainColorMedium}, 1);
    border-radius: 0.6rem;
    overflow: hidden;
    color: rgba(${props => props.theme.mainColorMedium}, 1);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Overflow = styled.div`
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  transition: 0.3s;
`;

export const Preview = styled.div`
  position: relative;
  div {
    width: 100%;
    height: auto;
    box-shadow: 0 0 0 2px rgba(${props => props.theme.mainColorMedium}, 1);
    border-radius: 0.6rem;
    overflow: hidden;
  }
  &:hover ${Overflow} {
    opacity: 1;
    visibility: visible;
  }
`;
