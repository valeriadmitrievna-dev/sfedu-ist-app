import React from "react";
import * as H from "../../styles/home";
import MainHeader from "../../components/MainHeader";
import PicturesGrid from "../../components/PicturesGrid";

export default function HomeLayout({
  resultPictures,
  loading,
  handleCheckScroll,
  handleInputSearch,
  searchInput,
}) {
  return (
    <H.Body onScroll={handleCheckScroll}>
      <MainHeader
        handleInputSearch={handleInputSearch}
        searchInput={searchInput}
      />
      <H.Content onScroll={handleCheckScroll}>
        <PicturesGrid pictures={resultPictures} loading={loading} />
      </H.Content>
    </H.Body>
  );
}
