import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(${props => props.theme.mainColorMedium});
  span {
    border: 2px solid;
    border-color: #fff transparent;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 1s infinite linear;
  }
`;

export default function Image({ src, alt = "" }) {
  const [loading, setLoading] = useState(1);

  return (
    <Container>
      {!!loading && (
        <Loader>
          <span></span>
        </Loader>
      )}
      <img onLoad={() => setLoading(0)} src={src} alt={alt} />
    </Container>
  );
}
