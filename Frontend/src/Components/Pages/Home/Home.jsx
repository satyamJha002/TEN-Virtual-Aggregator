import React, { useState } from "react";
import FeatureEvents from "./featureEvents";
import FeaturedOrganizer from "./featuredOrganizer";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/events/search?query=${query}&location=${location}&dateFilter=${dateFilter}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pt-8">
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
      <div className="welcome-section" style={{ margin: "3rem auto" }}>
        <h2 className="border-red py-4 border-gray">
          Welcome to TEN Virtual Aggregator 2025
        </h2>
        <p>
          Looking to stay on top of the latest conferences in your field? TEN Virtual 
          Aggregator is your go-to platform for discovering the hottest academic events 
          of 2025. We're here to simplify your conference journey by providing everything 
          you need - from submission deadlines to publication guidelines. Whether you're 
          presenting research or expanding your network, we've got you covered.
        </p>
        <p>
          We bring together the biggest gatherings in science, technology, healthcare, 
          business, and more. What sets us apart? Our platform makes it super easy to 
          find the perfect conference for your needs. Plus, we carefully check each event 
          to make sure you're getting reliable, quality opportunities to showcase your work.
        </p>
        <p>
          Think of us as your personal conference assistant - we help you discover, 
          bookmark, and keep track of events that match your professional interests. 
          No more endless searching across different websites!
        </p>
      </div>

      <div className="main-content">
        <div className="left-column">
          <FeatureEvents />

          {/* About Us Section */}
          <div className="welcome-section">
            <h2 className="border-red border-gray">About Us</h2>
            <p>
              TEN Virtual Aggregator is your trusted guide in the world of academic 
              conferences. We've built the largest collection of verified professional 
              events, making it simple for researchers and industry experts to find 
              their next big opportunity. Our team personally reviews each conference 
              to ensure you're getting access to legitimate, high-quality events.
            </p>
            <p>
              Why choose us? We're more than just a listing site. We understand that 
              finding the right conference can be overwhelming, so we've created tools 
              to help you filter through options based on your field, location, and 
              schedule. From cutting-edge scientific symposiums to innovative business 
              forums, we connect you with events that matter in your profession.
            </p>
            <p>
              Our platform is designed with you in mind - whether you're a seasoned 
              professor or an emerging professional. Just tell us what you're interested 
              in, and we'll help you find conferences that align with your goals and 
              advance your career.
            </p>
          </div>
          <FeaturedOrganizer />
        </div>
        <div className="right-column mt-9">
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
