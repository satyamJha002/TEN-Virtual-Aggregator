import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [dateFilter, setDateFilter] = useState("All Date");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/events/search",
        {
          params: { query, location, dateFilter },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.log("Error searching events", error.response.data.message);
    }
  };
  return (
    <div>
      <div>
        <h1>Find Your Next Conference</h1>
        <input
          type="text"
          placeholder="Search events or categories"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="City or location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="All Data">All Dates</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="This Week">This Week</option>
          <option value="This Weekend">This Weekend</option>
          <option value="Next Week">Next Week</option>
          <option value="Next Month">Next Month</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Home;
