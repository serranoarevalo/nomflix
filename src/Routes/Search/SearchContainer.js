import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";
import { useApi } from "../../hooks";

export default () => {
  const search = async searchingBy => {
    setLoading(true);
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
  };
  const [searchingBy, setSearchingBy] = useState("");
  const [data, setData] = useState({
    movieResults: null,
    showResults: null
  });
  const { loading, error, setLoading, wrappedFn } = useApi({
    initialLoading: false,
    inputFn: search,
    errorMessage: "Can't search"
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
      wrappedFn(searchingBy);
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
