import { useState } from "react";

export const useApi = ({ initialLoading = true, inputFn, errorMessage }) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState("");

  const wrappedFn = async (...args) => {
    try {
      await inputFn(...args);
    } catch (error) {
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, wrappedFn, setLoading };
};
