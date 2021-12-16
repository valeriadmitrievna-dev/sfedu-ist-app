import styled from "styled-components";

export const Container = styled.div`
  transition: 0.3s;
  ${({ sended }) =>
    sended &&
    `
    header, form {
      opacity: 0;
      visibility: hidden;
    }
  `}
  > p {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  button {
    margin-top: 2rem;
  }
`;

export const InputGroup = styled.div`
  width: 80%;
  input {
    width: 100%;
    border-bottom: 0.2rem solid ${props => props.theme.textColor};
    font-size: 1.8rem;
    color: rgb(${props => props.theme.mainColorMedium});
    letter-spacing: 0.05em;
    padding-bottom: 0.2rem;
    line-height: 120%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  opacity: 0.8;
  text-transform: capitalize;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 1.2rem;
  margin-top: 0.7rem;
`;
