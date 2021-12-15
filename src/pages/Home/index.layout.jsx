import React, { useRef } from "react";
import * as H from "../../styles/home";
import MainHeader from "../../components/MainHeader";
import PicturesGrid from "../../components/PicturesGrid";

export default function HomeLayout({ pictures, loading, handleCheckScroll }) {
  return (
    <H.Body>
      <MainHeader />
      <H.Content onScroll={handleCheckScroll}>
        <PicturesGrid pictures={pictures} loading={loading} />
      </H.Content>
    </H.Body>
  );
}
