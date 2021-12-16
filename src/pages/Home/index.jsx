import React, { useEffect } from "react";
import { useState } from "react";
import HomeLayout from "./index.layout";
import { posts } from "../../prefabs";

export default function Home() {
  const [pictures, setPictures] = useState([]);
  const [length, setLength] = useState(posts.length);
  const [loading, setLoading] = useState(false);
  const step = 20;

  const handleLoadMore = () => {
    if (pictures.length < length && !loading) {
      setLoading(true);
      const start = pictures.length;
      const end = pictures.length + step;
      setTimeout(() => {
        setPictures([...pictures, ...posts.slice(start, end)]);
        setLoading(false);
      }, 2000);
    }
  };

  const handleCheckScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <HomeLayout
      pictures={pictures}
      loading={loading}
      handleCheckScroll={handleCheckScroll}
    />
  );
}
