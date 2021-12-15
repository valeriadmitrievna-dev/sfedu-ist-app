import React from "react";
import * as H from "../../styles/home";
import MainHeader from "../../components/MainHeader";
import PicturesGrid from "../../components/PicturesGrid";
import { posts } from "../../prefabs";

export default function HomeLayout() {
  return (
    <H.Body>
      <MainHeader />
      <H.Content>
        <PicturesGrid pictures={posts} />
      </H.Content>
    </H.Body>
  );
}
