// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, dependencies);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
