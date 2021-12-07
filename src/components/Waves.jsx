import React from "react";
import styled, { keyframes } from "styled-components";

export default function Waves() {
  return (
    <WavesContainer>
      <WavesBody
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" />
          <use href="#gentle-wave" x="48" y="3" />
          <use href="#gentle-wave" x="48" y="5" />
          <use href="#gentle-wave" x="48" y="7" />
        </g>
      </WavesBody>
      <WavesBack />
    </WavesContainer>
  );
}

const move_forever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 45vh;
  width: 100%;
`;
const WavesBack = styled.div`
  background-color: ${props => props.theme.textColor};
  height: 25vh;
`;
const WavesBody = styled.svg`
  position: relative;
  width: 100%;
  margin-bottom: -7px;
  height: 20vh;
  .parallax > use {
    animation: ${move_forever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
    fill: rgba(${props => props.theme.wavesColor}, 0.7);
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
    fill: rgba(${props => props.theme.wavesColor}, 0.5);
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
    fill: rgba(${props => props.theme.wavesColor}, 0.3);
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
    fill: rgba(${props => props.theme.wavesColor}, 1);
  }
`;
