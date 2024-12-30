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

  const [searchFilter, setSearchFilter] = useState(null); // No filter selected initially

  const handleButtonClick = (filter) => {
    // Toggle visibility of the selected filter
    setSearchFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  useEffect(() => {
    // Update state based on window size
    const handleResize = () => {
      const desktopView = window.innerWidth >= 768;
      setIsDesktop(desktopView);
      if (desktopView) setSearchFilter(null); // Reset mobile filter when switching to desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto contact-page bg-white rounded-md flex items-start relative">
      {/* Filter Buttons - Mobile */}
      {!isDesktop && (
        <div className="w-full flex flex-wrap flex-col items-start mb-4 md:hidden">
          {/* Header */}
          <h3 className="m-w-xl mx-auto font-bold text-xl">
            Browse By
            <span className="block h-1 w-20 bg-red-800 absolute bottom-0 left-0"></span>
          </h3>

          {/* Buttons */}
          <div className="w-full flex justify-between mt-2">
            <button
              aria-label="Browse By Cities"
              onClick={() => handleButtonClick("india")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                searchFilter === "india"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Cities
            </button>
            <button
              aria-label="Browse By Country"
              onClick={() => handleButtonClick("country")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                searchFilter === "country"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Country
            </button>
            <button
              aria-label="Browse By Topics"
              onClick={() => handleButtonClick("topics")}
              className={`flex-1 text-center p-2 rounded-md mx-1 ${
                searchFilter === "topics"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Topics
            </button>
          </div>
        </div>
      )}

      {/* Display Results - Overlapping */}
      {searchFilter && !isDesktop && (
        <div className="absolute top-[105px] left-0 w-full bg-white shadow-md p-4 rounded-md z-50 max-h-[calc(100vh-120px)] overflow-y-auto">
          {searchFilter === "india" && <BrowseByCity />}
          {searchFilter === "country" && <BrowseByCountry />}
          {searchFilter === "topics" && <BrowseByTopics />}
        </div>
      )}

      <div className="contact-form border shadow-md" style={{borderRadius: "4px", width: "100%"}}>
        <h2  className="text-2xl cursor-pointer border-red border-gray items-center mb-4">Contact Us</h2>
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

      {/* Right Section: Desktop */}
      {isDesktop && (
        <div className="hidden md:block w-full md:w-96 md:ml-6">
          <BrowseByCity />
          <BrowseByCountry />
          <BrowseByTopics />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
