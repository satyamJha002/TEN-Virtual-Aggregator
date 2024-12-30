import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../customAPI/useFetch";
import "./FilterPage.css";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";
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

  return (
    <div className="filter-events-container">
      <div className="filter-main-content">
        <div className="filter-left-column">
          <div className="header_filter">
            <h1>Your Searched Conference Here</h1>
          </div>
          <div className="flex-1">
            <div className="filter_events-table">
              <div className="filter_table-header">
                <div className="filter_date-col">DATE</div>
                <div className="filter_name-col">Conference Name</div>
                <div className="filter_venue-col">VENUE</div>
              </div>
              {error && <div>{error}</div>}
              {data?.data?.map((event) => (
                <div className="filter_table_row" key={event._id}>
                  <div className="filter_date-col">{event.date}</div>
                  <div className="filter_name-col">{event.name}</div>
                  <div className="filter_venue-col">{event.venue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-right-column">
          <BrowseByCity />
          <BrowseByCountry />
          <BrowseByTopics />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
