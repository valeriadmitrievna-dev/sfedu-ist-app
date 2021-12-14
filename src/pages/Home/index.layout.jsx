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
        <PicturesGrid
          category="new"
          pictures={posts
            .sort((a, b) => new Date(b.created) - new Date(a.created))
            .slice(0, 10)}
        />
        <PicturesGrid
          category="popular"
          pictures={posts.sort((a, b) => b.likes - a.likes).slice(0, 10)}
        />
      </H.Content>
    </H.Body>
  );
}
