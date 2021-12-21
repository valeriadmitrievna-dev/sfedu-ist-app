import React from "react";
import styled, { keyframes } from "styled-components";

export default function Loader({ small }) {
  return (
    <LoaderContainer>
      <LoaderSpiner small={small} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderSpiner = styled.span`
  width: 4rem;
  height: 4rem;
  border: 0.4rem solid;
  border-color: #fff transparent;
  border-radius: 50%;
  display: inline-block;
  animation: ${rotation} 1s linear infinite;
  ${({ small }) => !small && "margin: 3rem 0;"}
`;
