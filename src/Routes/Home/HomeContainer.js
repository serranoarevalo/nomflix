import React, { useEffect, useState } from "react";
import { movies } from "../../api";
import HomePresenter from "./HomePresenter";
import { useApi } from "../../hooks";

export default () => {
  const getMovies = async () => {
    const {
      data: { results: popular }
    } = await movies.getPopular();
    const {
      data: { results: upcoming }
    } = await movies.getUpcoming();
    const {
      data: { results: nowPlaying }
    } = await movies.getNowPlaying();
    setData({
      popular,
      upcoming,
      nowPlaying
    });
  };

  const [data, setData] = useState({
    popular: null,
    upcoming: null,
    nowPlaying: null
  });
  const { loading, error, wrappedFn } = useApi({
    inputFn: getMovies,
    errorMessage: "Could not get movies"
  });

  useEffect(() => {
    wrappedFn("dick", true);
  }, []);

  return (
    <HomePresenter
      loading={loading}
      error={error}
      popular={data.popular}
      upcoming={data.upcoming}
      nowPlaying={data.nowPlaying}
    />
  );
};
