import styled from "styled-components";
import { Avatar } from "./home";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 93.5rem;
  height: calc(100vh - 10rem);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: -2rem;
  display: grid;
  grid-template-columns: 23rem 1fr;
`;

export const Menu = styled.aside`
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const MenuItem = styled.button`
  display: block;
  background: rgba(255, 255, 255, ${({ active }) => (active ? 0.3 : 0.1)});
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: left;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const Content = styled.div`
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ProfilePhoto = styled(Avatar)`
  width: 6rem;
  height: 6rem;
`;

export const Change = styled.button`
  margin-top: 1rem;
  color: rgb(${props => props.theme.mainColorMedium});
  font-weight: 600;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0;
`;

export const InputGroup = styled.div`
  input,
  textarea {
    border: 2px solid rgba(255, 255, 255, 0.2);
    font-size: 1.8rem;
    padding: 1rem 1.5rem;
    border-radius: 0.4rem;
    width: 100%;
    max-width: 40rem;
    transition: 0.3s;
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    &:focus,
    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: none;
    }
    background: transparent;
  }
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  display: block;
`;

export const CheckGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  input {
    display: none;
  }
  input:checked + label svg path {
    opacity: 1;
  }
  label {
    width: 2rem;
    height: 2rem;
    svg {
      width: 100%;
      height: 100%;
      cursor: pointer;
      path {
        opacity: 0;
        transition: 0.1s;
      }
    }
  }
  p {
    margin: 0;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Theme = styled.div`
  width: 13rem;
  height: 9rem;
  border-radius: 0.8rem;
  border: 2px solid #fff;
  cursor: pointer;
  transition: 0.3s;
  background: linear-gradient(
    60deg,
    rgba(${({ dark }) => dark}, 0.7) 0%,
    rgba(${({ light }) => light}, 0.7) 100%
  );
  ${({ active }) =>
    active && "box-shadow: 0 0 0 .5rem rgba(255, 255, 255, 0.5);"}
`;

