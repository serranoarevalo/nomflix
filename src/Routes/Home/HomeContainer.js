import React, { useEffect, useState } from "react";
import { movies } from "../../api";
import HomePresenter from "./HomePresenter";

export default () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    popular: null,
    upcoming: null,
    nowPlaying: null
  });

  const getMovies = async () => {
    try {
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
    } catch {
      setError("Could not get movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
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
