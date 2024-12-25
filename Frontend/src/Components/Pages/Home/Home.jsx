import React, { useState } from "react";
import FeatureEvents from "./featureEvents";
import FeaturedOrganizer from "./featuredOrganizer";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    toast.success("Successfully", { position: "top-center" });
    navigate(
      `/events/search?query=${query}&location=${location}&dateFilter=${dateFilter}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Search Section */}
      <div className="header-container">
        <h1>Find Your Next Conference</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search events or categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="City or location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-field"
          />
          <select
            className="dropdown"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="all-dates">All Dates</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this-week">This Week</option>
            <option value="this-weekend">This Weekend</option>
            <option value="next-week">Next Week</option>
          </select>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2 className="border-red border-gray">Welcome To Academic World Research 2025</h2>
        <p>
          Academic World Research (AWR) will be the game changer of your life
          because it is going to give you the latest updates on all the
          International Conference Alerts 2025. Be ready to get a wealth of
          information on upcoming conferences in 2025, including deadlines,
          topics, strategies to choose reputed journals, submission guidelines,
          and complete support with regard to paper publications. Stay ahead of
          your competitors with AWR and elevate your academic journey.
        </p>
        <p>
        International conferences on science, engineering, management, health and allied areas at Academic World Research are the centres for academic and business interaction which makes us a flag bearer in global market of professional event promotion. Detailed review, assessment and user friendly accessibility makes us the trailblazer of academic conferences worldwide.
        </p>
        <p>Academic World Research is a pin board to find and book mark international conference of your need that suits your academic and professional requirements.</p>
      </div>

      <div className="main-content">
        <div className="left-column">
          <FeatureEvents />

          {/* About Us Section */}
          <div className="welcome-section">
            <h2 className="border-red border-gray">About Us</h2>
            <p>
              Academic World Research is world's most reliable index of academic
              activities like international conferences and professional events.
              If you are looking for a perfect platform to learn and share, AWR
              is the best gateway to reserve your slot at conferences of your
              need. Certifying the conferences with verification and their
              authenticity makes us a trusted partner of academicians and
              professionals to help them to get notified about upcoming
              conferences scheduled worldwide.
            </p>
            <p>
              International conferences on science, engineering, management,
              health, and allied areas at Academic World Research are the
              centers for academic and business interaction, which makes us a
              flag bearer in the global market of professional event promotion.
              Detailed review, assessment, and user-friendly accessibility make
              us the trailblazer of academic conferences worldwide.
            </p>
            <p>
              Academic World Research is a pinboard to find and bookmark
              international conferences of your need that suit your academic and
              professional requirements.
            </p>
          </div>
          <FeaturedOrganizer />
        </div>
        <div className="right-column">
          <BrowseByCity />
          <BrowseByCountry />
          <BrowseByTopics />
        </div>
      </div>
    </div>
  );
};

export default Home;

/* 
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
 */
