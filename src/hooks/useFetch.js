import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //& Code for fetching data from Strapi Backend with axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequest.get(
          url
          // to display all just remove filter
        );
        setProduct(response.data.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { product, loading, error };
};

export default useFetch;
