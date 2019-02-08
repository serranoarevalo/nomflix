import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

export default ({
  location: { pathname },
  match: {
    params: { id }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const getDetail = async () => {
    const isMovie = pathname.includes("movie");
    try {
      let result;
      if (isMovie) {
        const { data } = await movies.getMovie(id);
        result = data;
      } else {
        const { data } = await tv.getShow(id);
        result = data;
      }
      setResult(result);
    } catch {
      setError("Can't find what you're looking for");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return <DetailPresenter loading={loading} result={result} error={error} />;
};
