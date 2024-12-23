import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../customAPI/useFetch";

const FilterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  const locationParam = queryParams.get("location") || "";
  const dateFilter = queryParams.get("dateFilter");

  const { fetchData, data, loading, error, setParams } = useFetch(
    "http://localhost:3000/api/events/search",
    "GET",
    { query, location: locationParam, dateFilter }
  );

  useEffect(() => {
    setParams({
      query,
      location: locationParam,
      dateFilter,
    });
    fetchData();
  }, [query, locationParam, dateFilter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {console.log(data)}
      <div>
        <div>
          {data?.map((event) => (
            <div key={event._id}>
              <p>{new Date(event.startDate).toLocaleDateString()}</p>
              <h1>{event.eventName}</h1>
              <p>{event.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
