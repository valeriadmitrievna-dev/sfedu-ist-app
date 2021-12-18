import React, { useEffect } from "react";
import { useState } from "react";
import HomeLayout from "./index.layout";
import { posts } from "../../prefabs";
import {
  GetPicturesLengthService,
  GetPicturesService,
} from "../../services/picture";
import { errorMessage } from "../../utils";

export default function Home() {
  const [pictures, setPictures] = useState([]);
  const [length, setLength] = useState(posts.length);
  const [loading, setLoading] = useState(false);
  const step = 20;

  const handleLoadMore = async () => {
    if (pictures.length < length && !loading) {
      setLoading(true);
      const page = Math.round(pictures.length / step);
      console.log(page);
      try {
        const { data } = await GetPicturesService(step, page);
        if (data.error) {
          throw new Error(data.error);
        } else {
          setPictures([...pictures, ...data]);
        }
      } catch (error) {
        errorMessage(error.message);
      }
      setLoading(false);
    }
  };

  const handleCheckScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      handleLoadMore();
    }
  };

  const handleGetLength = async () => {
    try {
      const { data } = await GetPicturesLengthService();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setLength(data);
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };

  useEffect(() => {
    if (length) {
      handleLoadMore();
    }
  }, [length]);

  useEffect(() => {
    handleGetLength();
  }, []);

  return (
    <HomeLayout
      pictures={pictures}
      loading={loading}
      handleCheckScroll={handleCheckScroll}
    />
  );
}
