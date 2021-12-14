import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Picture from "./Picture";

export default function PicturesGrid({ category, pictures }) {
  return (
    <Container>
      <Title>{category}</Title>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 5 }}>
        <Masonry gutter="2rem">
          {pictures.map(p => (
            <Picture picture={p} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
}

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  font-family: "Comfortaa";
  color: #fff;
  font-size: 2.4rem;
`;
