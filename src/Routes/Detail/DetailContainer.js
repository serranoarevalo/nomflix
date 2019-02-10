import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";
import { useApi } from "../../hooks";

export default ({
  location: { pathname },
  match: {
    params: { id }
  }
}) => {
  const getDetail = async () => {
    const isMovie = pathname.includes("movie");
    let result;
    if (isMovie) {
      const { data } = await movies.getMovie(id);
      result = data;
    } else {
      const { data } = await tv.getShow(id);
      result = data;
    }
    setResult(result);
  };

  const { loading, error, wrappedFn } = useApi({
    errorMessage: "Can't find what you're looking for",
    inputFn: getDetail
  });
  const [result, setResult] = useState(null);

  useEffect(() => {
    wrappedFn();
  }, []);

  return <DetailPresenter loading={loading} result={result} error={error} />;
};
