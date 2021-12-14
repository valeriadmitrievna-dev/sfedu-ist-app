import styled from "styled-components";

export const Container = styled.main`
  background: linear-gradient(
    60deg,
    rgb(${props => props.theme.mainColorLight}) 0%,
    rgb(${props => props.theme.mainColorDark}) 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: rgb(
      ${props => props.theme.mainColorMedium}
    ) !important;
  }
`;

export const GlassContainer = styled.div`
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  width: ${({ width }) => width || "60rem"};
  box-shadow: 0 0.5rem 1.6rem 0
    rgba(${props => props.theme.mainColorMedium}, 0.2);
`;

export const Button = styled.button`
  border-radius: 0.8rem;
  border: 0.3rem solid rgb(${props => props.theme.mainColorMedium});
  padding: 1.2rem 2.6rem;
  background: rgba(${props => props.theme.mainColorMedium}, 0.2);
  font-weight: 500;
  color: rgb(${props => props.theme.mainColorMedium});
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  transition: 0.3s;
  &:hover {
    background: rgba(${props => props.theme.mainColorMedium}, 1);
    color: ${props => props.theme.textColor};
  }
`;

export const ToggledVisibleContainer = styled.div`
  transition: 0.3s ease-in-out;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  transform: translateY(${({ opened }) => (opened ? "0" : "-10rem")});
`;
