import React, { useState, useEffect } from "react";

import "./ContactUs.css";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";
import useFetch from "../../../customAPI/useFetch";
import { toast } from "react-toastify";

const ContactForm = ({
  handleSubmmit,
  handleChange,
  fullName,
  email,
  phoneNumber,
  queriesTitle,
  message,
}) => (
  <form className="contact-form-container" onSubmit={handleSubmmit}>
    <div className="form-row">
      <input
        type="text"
        placeholder="Full Name*"
        name="fullName"
        value={fullName}
        onChange={handleChange}
        className="contact-input-field"
      />
      <input
        type="email"
        placeholder="Email*"
        name="email"
        value={email}
        onChange={handleChange}
        className="contact-input-field"
      />
    </div>
    <div className="form-row">
      <input
        type="text"
        placeholder="Your Phone*"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        className="contact-input-field"
      />
      <input
        type="text"
        placeholder="Title of your Page*"
        name="queriesTitle"
        value={queriesTitle}
        onChange={handleChange}
        className="contact-input-field"
      />
    </div>
    <div className="form-row">
      <textarea
        placeholder="Message*"
        className="textarea-field"
        name="message"
        value={message}
        onChange={handleChange}
      ></textarea>
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
  const [formData, setFormaData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    queriesTitle: "",
    message: "",
  });
  const [view, setView] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const { fullName, email, phoneNumber, queriesTitle, message } = formData;

  const handleChange = (e) => {
    setFormaData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { fetchData, loading, error } = useFetch(
    "http://localhost:3000/api/contact",
    "POST"
  );

  const handleSubmmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !queriesTitle || !message) {
      toast.info("Please fill in all the required fields");
      return;
    }

    const payload = {
      fullName,
      email,
      phoneNumber,
      queriesTitle,
      message,
    };

    try {
      const response = await fetchData(payload);
      if (response.success) {
        toast.success("Your message has been sent successfully");
        setFormaData({
          fullName: "",
          email: "",
          phoneNumber: "",
          queriesTitle: "",
          message: "",
        });
      } else {
        toast.error(response.error || "An unexpected error occurred");
      }
    } catch (error) {
      toast.error(
        "An error occurred while sending your message. Please try again."
      );
      console.error("Error:", error);
    }
  };

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
    <div className="contact-page max-w-6xl mx-auto">
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
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-700">Error: {error}</div>}
        {!loading && !error && (
          <ContactForm
            handleSubmmit={handleSubmmit}
            handleChange={handleChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            queriesTitle={queriesTitle}
            message={message}
          />
        )}
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

export default ContactUs;
