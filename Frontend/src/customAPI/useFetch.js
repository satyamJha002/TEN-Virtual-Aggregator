import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (
  url,
  method = "GET",
  initialParams = null,
  initialBody = null,
  skip = false
) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [body, setBody] = useState(initialBody);
  const [params, setParams] = useState(initialParams);

  /*  */

  const fetchData = async (customBody = body, customParams = params) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        params: customParams,
        data: customBody,
      });
      setData(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (method === "GET" || (params && !skip)) fetchData();
  }, [params, method, skip]);

  return { data, loading, error, fetchData, setBody, setParams };
};

export default useFetch;
