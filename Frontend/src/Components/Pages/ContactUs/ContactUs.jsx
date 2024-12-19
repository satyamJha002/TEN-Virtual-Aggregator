import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [view, setView] = useState(""); // State to control which section to display in mobile view
  const cities = [
    "Amsterdam",
    "Bangalore",
    "Bangkok",
    "Beijing",
    "Berlin",
    "Buenos Aires",
    "Chennai",
    "Dubai",
    "Hamburg",
    "Hyderabad",
    "Hong Kong",
    "Jakarta Raya",
    "Kuala",
    "Kathmandu",
    "London",
    "Madrid",
    "Mexico City",
    "Melbourne",
    "Montreal",
    "Mumbai",
    "New Delhi",
    "New York",
    "Rome",
    "Singapore",
    "Seoul",
    "Santiago",
    "Sydney",
    "Washington",
    "Bali",
  ];

  const topics = [
    "Engineering",
    "Social Sciences and Humanities",
    "Interdisciplinary",
    "Health and Medicine",
    "Regional Studies",
    "Mathematics and Statistics",
    "Business and Economics",
    "Law",
    "Education",
    "Life Science",
  ];

  const countries = {
    Asia: [
      "Indonesia",
      "India",
      "Malaysia",
      "UAE",
      "Singapore",
      "Bangkok",
      "Maldives",
      "Hong Kong",
    ],
    Americas: ["USA", "Canada", "Brazil", "Mexico"],
    Europe: ["Austria", "Belgium", "Czech", "Denmark", "Finland", "France"],
    Oceania: ["Australia", "New Zealand"],
  };

  const renderSection = () => {
    if (view === "city") {
      return (
        <div className="city-list">
          {cities.map((city) => (
            <button key={city} className="city-button">
              {city}
            </button>
          ))}
        </div>
      );
    }
    if (view === "country") {
      return (
        <div className="browse-by-country" style={{ display: "block" }}>
          {Object.entries(countries).map(([region, country]) => (
            <div key={region}>
              <strong>{region}</strong>
              {country.join(" | ")}
            </div>
          ))}
        </div>
      );
    }
    if (view === "topics") {
      return (
        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  // Toggle the section visibility
  const handleButtonClick = (section) => {
    if (view === section) {
      // If the section is already visible, hide it
      setView("");
    } else {
      // Show the clicked section
      setView(section);
    }
  };

  return (
    <div className="contact-page">
      {/** Heading visible only at 320px */}
      <h3 className="mobile-heading">Browse By</h3>
      <div className="mobile-buttons">
        <button className="mobile-button" onClick={() => handleButtonClick("city")}>
          City
        </button>
        <button className="mobile-button" onClick={() => handleButtonClick("country")}>
          Country
        </button>
        <button className="mobile-button" onClick={() => handleButtonClick("topics")}>
          Topics
        </button>
      </div>

      {/** Render the selected section dynamically for mobile view */}
      <div className="mobile-view">{renderSection()}</div>

      <div className="contact-form">
        <h2 className="section-title">Contact Us</h2>
        <p>Please get in touch for comments, requests.</p>

        <form className="contact-form-container">
          <div className="form-row">
            <input type="text" placeholder="Full Name*" className="input-field" />
            <input type="email" placeholder="Email*" className="input-field" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your Phone*" className="input-field" />
            <input type="text" placeholder="Title of your Page*" className="input-field" />
          </div>
          <div className="form-row">
            <textarea placeholder="Message*" className="textarea-field"></textarea>
          </div>
          <div className="captcha-container">
            <input type="checkbox" id="captcha" />
            <label htmlFor="captcha" className="captcha-label">I'm not a robot</label>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>

        <div className="contact-info">
          <p>Contact Us:</p>
          <p>+91-8925031783</p>
          <p>info@academicworldresearch.org</p>
        </div>
      </div>

      <div className="browse-section">
        {/** Original Browse Sections */}
        <div className="browse-by-city">
          <h3 className="section-title">Browse By City</h3>
          <div className="city-list">
            {cities.map((city) => (
              <button key={city} className="city-button">
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="browse-by-country">
          <h3 className="section-title">Browse By Country</h3>
          <div>
            {Object.entries(countries).map(([region, country]) => (
              <div key={region}>
                <strong>{region}</strong>
                {country.join(" | ")}
              </div>
            ))}
          </div>
        </div>

        <div className="browse-by-topics">
          <h3 className="section-title">Browse By Topics</h3>
          <ul className="topics-list">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;