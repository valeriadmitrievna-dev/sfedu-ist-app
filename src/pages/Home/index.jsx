import React, { useEffect } from "react";
import { useState } from "react";
import HomeLayout from "./index.layout";
import {
  GetPicturesLengthService,
  GetPicturesService,
} from "../../services/picture";
import { errorMessage } from "../../utils";

export default function Home() {
  const [pictures, setPictures] = useState([]);
  const [resultPictures, setResultPictures] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const step = 20;

  const handleLoadMore = async () => {
    if (pictures.length < length && !loading) {
      setLoading(true);
      const page = Math.round(pictures.length / step);
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

  const handleInputSearch = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.trim().length > 0) {
      setResultPictures(
        pictures.filter(p =>
          p.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setResultPictures(pictures);
    }
  }, [searchInput]);

  useEffect(() => {
    setResultPictures(pictures);
  }, [pictures]);

  useEffect(() => {
    console.log(length);
    if (length) {
      handleLoadMore();
    }
  }, [length]);

  useEffect(() => {
    handleGetLength();
  }, []);

  return (
    <HomeLayout
      resultPictures={resultPictures}
      loading={loading}
      handleCheckScroll={handleCheckScroll}
      handleInputSearch={handleInputSearch}
      searchInput={searchInput}
    />
  );
}
