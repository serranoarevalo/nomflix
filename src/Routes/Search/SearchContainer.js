import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchingBy, setSearchingBy] = useState("");
  const [data, setData] = useState({
    movieResults: null,
    showResults: null
  });

  const onSearchChange = event => {
    const {
      target: { value }
    } = event;
    setSearchingBy(value);
  };

  const onSearchSubmit = event => {
    event.preventDefault();
    if (searchingBy !== "") {
      search(searchingBy);
    }
  };

  const search = async searchingBy => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults }
      } = await movies.searchMovies(searchingBy);
      const {
        data: { results: showResults }
      } = await tv.searchTv(searchingBy);
      setData({
        movieResults,
        showResults
      });
    } catch {
      setError("Can't Search");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchPresenter
      loading={loading}
      error={error}
      movieResults={data.movieResults}
      showResults={data.showResults}
      searchingBy={searchingBy}
      onSearchChange={onSearchChange}
      onSearchSubmit={onSearchSubmit}
    />
  );
};
