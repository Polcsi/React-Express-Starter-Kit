import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { data };
};
