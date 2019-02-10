import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";
import { useApi } from "../../hooks";

export default () => {
  const getTv = async () => {
    const {
      data: { results: popular }
    } = await tv.getPopular();
    const {
      data: { results: topRated }
    } = await tv.getTopRated();
    const {
      data: { results: airingToday }
    } = await tv.getAiringToday();
    setData({
      popular,
      topRated,
      airingToday
    });
  };

  const { loading, error, wrappedFn } = useApi({
    inputFn: getTv,
    errorMessage: "Could not get tv shows"
  });
  const [data, setData] = useState({
    popular: null,
    topRated: null,
    airingToday: null
  });

  useEffect(() => {
    wrappedFn();
  }, []);

  return (
    <TVPresenter
      loading={loading}
      error={error}
      popular={data.popular}
      topRated={data.topRated}
      airingToday={data.airingToday}
    />
  );
};
