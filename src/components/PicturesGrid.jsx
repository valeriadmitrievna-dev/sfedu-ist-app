import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Picture from "./Picture.jsx";
import Loader from "./Loader.jsx";

export default function PicturesGrid({
  category,
  pictures,
  loading,
  breakpoints,
}) {
  return (
    <Container>
      {!!category && <Title>{category}</Title>}
      <ResponsiveMasonry
        columnsCountBreakPoints={
          breakpoints || { 0: 1, 320: 2, 768: 4, 1100: 5 }
        }
      >
        <Masonry gutter="2rem">
          {pictures.map(p => (
            <Picture key={p._id} picture={p} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {loading && <Loader />}
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
