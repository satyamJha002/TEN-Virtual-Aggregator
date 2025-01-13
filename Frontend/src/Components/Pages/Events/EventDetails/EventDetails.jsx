import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PaperSubmission from "./SidebarNav/PaperSubmission";
import Agenda from "./SidebarNav/Agenda";
import ConferenceBrochure from "./SidebarNav/ConferenceBrochure";
import Register from "./SidebarNav/Register";

const EventDetails = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "paper-submission":
        return <PaperSubmission />;
      case "agenda":
        return <Agenda />;
      case "brochure":
        return <ConferenceBrochure />;
      case "register":
        return <Register />;
      default:
        return <PaperSubmission />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setIsSticky(currentPosition > 200);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const { event } = location.state || {};
  let name = event.name;
  let date = event.date;
  let eventlocation = event.venue;

  const venue = event.venue.split(",");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="relative bg-blue-900 p-8">
        <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center overflow-hidden">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="flex items-center mx-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 text-white mx-1">❄</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            {name}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <div className="flex items-center">
              <span className="text-orange-400 mr-2">📅</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <span className="text-orange-400 mr-2">📍</span>
              <span>{venue[1].trim()}</span>
            </div>
          </div>
          <div
            className={`mt-6 flex justify-center gap-4 ${
              isSticky ? "invisible" : "visible"
            }`}
          >
            <Link to="/research" state={{ name, date, eventlocation }}>
              <button className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded flex items-center">
                Attend
              </button>
            </Link>
            {/* In here i have added a google calender */}
            <button
              className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded flex items-center"
              onClick={() => {
                const [day, month, year] = date.split("-");
                const parsedDate = new Date(`${year}-${month}-${day}T00:00:00`);

                if (isNaN(parsedDate.getTime())) {
                  console.error("Invalid Date Format:", date);
                  alert("Event date is invalid. Please check the date format.");
                  return;
                }

                const startDate = parsedDate
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "");
                const endDate = new Date(parsedDate.getTime() + 3600000)
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "");

                const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  name
                )}&dates=${startDate}/${endDate}&location=${encodeURIComponent(
                  eventlocation
                )}&details=${encodeURIComponent(
                  "Join us for an engaging conference!"
                )}`;

                window.open(calendarUrl, "_blank");
              }}
            >
              Add to Calendar <span className="ml-2">+</span>
            </button>
          </div>
        </div>

        <div
          className={`
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 bg-blue-900 shadow-lg transform translate-y-0"
              : "transform -translate-y-full"
          }
          transition-transform duration-300 ease-in-out z-50 py-3
        `}
        >
          <div className="flex justify-center gap-4">
            <Link to="/research" state={{ name, date, eventlocation }}>
              <button className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded flex items-center">
                Attend
              </button>
            </Link>
            <button
              className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded flex items-center"
              onClick={() => {
                const [day, month, year] = date.split("-");
                const parsedDate = new Date(`${year}-${month}-${day}T00:00:00`);

                if (isNaN(parsedDate.getTime())) {
                  console.error("Invalid Date Format:", date);
                  alert("Event date is invalid. Please check the date format.");
                  return;
                }

                const startDate = parsedDate
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "");
                const endDate = new Date(parsedDate.getTime() + 3600000)
                  .toISOString()
                  .replace(/-|:|\.\d+/g, "");

                const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  name
                )}&dates=${startDate}/${endDate}&location=${encodeURIComponent(
                  eventlocation
                )}&details=${encodeURIComponent(
                  "Join us for an engaging conference!"
                )}`;

                window.open(calendarUrl, "_blank");
              }}
            >
              Add to Calendar <span className="ml-2">+</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-red-900 text-center my-8">
        About Conference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
        {/* Sidebar Navigation */}
        <div className="bg-white">
          <nav className="flex flex-col">
            <button
              onClick={() => setActiveTab("paper-submission")}
              className="p-4 bg-black text-white hover:bg-gray-800"
            >
              Paper Submission
            </button>
            <button
              onClick={() => setActiveTab("agenda")}
              className="p-4 bg-black text-white hover:bg-gray-800"
            >
              Agenda
            </button>
            <button
              onClick={() => setActiveTab("brochure")}
              className="p-4 bg-black text-white hover:bg-gray-800"
            >
              Conference Brochure
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className="p-4 bg-black text-white hover:bg-gray-800"
            >
              Register Now
            </button>
          </nav>
        </div>

        {/* Paper Submission Form */}
        {activeTab ? (
          renderContent()
        ) : (
          <PaperSubmission
            name={event.name}
            date={event.date}
            city={venue[0].trim()}
            country={venue[1].trim()}
          />
        )}
      </div>

      {/* Organizer Details */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-red-900 text-center mb-8">
          Organizer Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="border p-4 text-center">
            <h3 className="font-bold mb-2">Event Planner</h3>
            <p>Raj Kumar</p>
          </div>
          <div className="border p-4 text-center">
            <h3 className="font-bold mb-2">Call Support</h3>
            <p>919677007228</p>
          </div>
          <div className="border p-4 text-center">
            <h3 className="font-bold mb-2">Email Support</h3>
            <p>info@nationalconference.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
