import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    background: linear-gradient(
    60deg,
    rgb(${props => props.theme.mainColorLight}) 0%,
    rgb(${props => props.theme.mainColorDark}) 100%
  );
  transition: background 1s ease-out; 
  height: 100vh;
  overflow: hidden;
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
  }
  a:hover {
    color: #fff;
  }
  .ant-upload.ant-upload-select-picture-card {
    text-align: center;
    vertical-align: top;
    background-color: rgba(${props => props.theme.mainColorMedium}, 0.5);
    border: 2px solid rgb(${props => props.theme.mainColorMedium}) !important;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s;
    .ant-upload {
      color: #fff;
      font-family: 'Comfortaa';
    }
  }
  .ant-collapse {
    color: rgba(${props => props.theme.mainColorMedium}, 1);
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    & > .ant-collapse-item {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      & > .ant-collapse-header {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        padding: 12px 16px;
        color: rgba(${props => props.theme.mainColorMedium}, 1);
        font-weight: bold;
        line-height: 1.5715;
        display: flex;
        align-items: center;
        gap: 1rem;
        > div {
          width: 2rem;
          height: 2rem;
          svg {
            width: 100%;
            height: 100%;
            path {
              stroke: rgba(${props => props.theme.mainColorMedium}, 1);
            }
          }
        }
      }
      .ant-collapse-content {
        color: #fff;
        background-color: transparent;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .ant-modal-close {
    top: 16px;
    right: 16px;
    .ant-modal-close-x {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 60%;
        height: 60%;
        path {
          fill: #292d32;
        }
      }
    }
  }
  .ant-modal-footer {
    display: flex;
    align-items: stretch;
    gap: 16px;
    justify-content: flex-end;
  }
  @media (min-width: 540px) {
    li {
      list-style-position: inside;
    }
  }
`;

export const GlassContainer = styled.div`
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  width: ${({ width }) => width || "60rem"};
  box-shadow: 0 0.5rem 1.6rem 0
    rgba(${props => props.theme.mainColorMedium}, 0.2);
  @media (max-width: 560px) {
    margin: 1rem;
  }
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
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background: rgba(${props => props.theme.mainColorMedium}, 0.2);
      color: rgb(${props => props.theme.mainColorMedium});
    }
  }
`;

export const ToggledVisibleContainer = styled.div`
  transition: 0.3s ease-in-out;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  transform: translateY(${({ opened }) => (opened ? "0" : "-10rem")});
`;

export const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;
