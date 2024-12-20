import React, { useState, useEffect } from "react";

import "./ContactUs.css";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";

const ContactForm = () => (
  <form className="contact-form-container">
    <div className="form-row">
      <input type="text" placeholder="Full Name*" className="input-field" />
      <input type="email" placeholder="Email*" className="input-field" />
    </div>
    <div className="form-row">
      <input type="text" placeholder="Your Phone*" className="input-field" />
      <input
        type="text"
        placeholder="Title of your Page*"
        className="input-field"
      />
    </div>
    <div className="form-row">
      <textarea placeholder="Message*" className="textarea-field"></textarea>
    </div>
    <div className="captcha-container">
      <input type="checkbox" id="captcha" />
      <label htmlFor="captcha" className="captcha-label">
        I'm not a robot
      </label>
    </div>
    <button type="submit" className="submit-button">
      Send
    </button>
  </form>
);

const ContactUs = () => {
  const [view, setView] = useState(""); // State to control visible section
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSection = () => {
    if (view === "city") return <BrowseByCity />;
    if (view === "country") return <BrowseByCountry />;
    if (view === "topics") return <BrowseByTopics />;
    return null;
  };

  return (
    <div className="contact-page">
      {!isDesktop && (
        <>
          <h3 className="text-2xl font-semibold relative inline-block mb-2">
            Browse By
            <span className="block h-1 w-20 bg-red-800 absolute bottom-0 left-0"></span>
          </h3>
          <div className="mobile-buttons flex">
            <button
              aria-label="Browse By City"
              onClick={() => setView(view === "city" ? "" : "city")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                view === "city"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              City
            </button>
            <button
              aria-label="Browse By Country"
              onClick={() => setView(view === "country" ? "" : "country")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                view === "country"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Country
            </button>
            <button
              aria-label="Browse By Topics"
              onClick={() => setView(view === "topics" ? "" : "topics")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                view === "topics"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Topics
            </button>
          </div>

          {view && <div className="mobile-view">{renderSection()}</div>}
        </>
      )}

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Please get in touch for comments or requests.</p>
        <ContactForm />
        <div className="contact-info">
          <p>Contact Us:</p>
          <p>+91-8925031783</p>
          <p>info@academicworldresearch.org</p>
        </div>
      </div>

      {isDesktop && (
        <div className="browse-section">
          <h3>Browse By City</h3>
          <BrowseByCity />

          <BrowseByCountry />

          <BrowseByTopics />
        </div>
      )}
    </div>
  );
};

export default ContactUs;