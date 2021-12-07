import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const HeaderLogo = styled.div`
  width: 6rem;
  height: 6rem;
  svg,
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.h1`
  font-size: 3.6rem;
  color: rgb(${props => props.theme.mainColorMedium});
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.4rem;
    background: #fff;
    left: 0;
    bottom: 0.6rem;
    z-index: -1;
  }
`;

export const MainText = styled.p`
  color: #fff;
  text-align: center;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
`;
