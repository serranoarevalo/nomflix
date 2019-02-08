import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    popular: null,
    topRated: null,
    airingToday: null
  });

  const getTv = async () => {
    try {
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
    } catch {
      setError("Could not get tv shows");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTv();
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
