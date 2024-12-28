import React, { useState, useEffect } from "react";
import useEventsStore from "../../../services/eventsStore";
import "./Events.css";

const Events = () => {
  const { events, loading, error, fetchEvents } = useEventsStore();
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getMonthsArray = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonthIndex = new Date().getMonth();
    return [
      "All",
      ...monthNames
        .slice(currentMonthIndex)
        .concat(monthNames.slice(0, currentMonthIndex)),
    ];
  };

  const filteredEvents =
    selectedMonth === "All"
      ? events
      : events.filter((event) => event.month === selectedMonth);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const getCurrentEvents = () =>
    filteredEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="scientific-events-container">
      <div className="events-sidebar">
        <div className="calgary-header">
          <h2>Calgary</h2>
        </div>

        <div className="promo-box conferences">
          <h3>INTERNATIONAL CONFERENCES</h3>
          <ul>
            <li>✓ Meet & Interact with Educators & Researchers</li>
            <li>✓ Virtual Presentation Available</li>
            <li>✓ Journal Publication (High Impact Factor)</li>
          </ul>
          <div className="scopus-badge">
            <span>Scopus</span>
            <span className="citation-index">SJR</span>
          </div>
        </div>

        <div className="promo-box journals">
          <h3>TOP JOURNALS</h3>
          <h4>WITH IMPACT FACTORS</h4>
          <div className="scopus-badge">
            <span className="scopus">Scopus</span>
          </div>
          <div>
            <button className="submit-btn">SUBMIT NOW!</button>
          </div>
        </div>
      </div>

      <div className="scientific-events">
        <div className="header">
          <h1 className="all-heading border-red border-gray">
            Upcoming International Conferences
          </h1>
          <div className="month-navigation" role="tablist">
            {getMonthsArray().map((month) => (
              <button
                key={month}
                className={`month-btn ${
                  selectedMonth === month ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedMonth(month);
                  setCurrentPage(1);
                }}
                role="tab"
                aria-selected={selectedMonth === month}
                aria-controls="events-table"
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div id="events-table" className="events-table" role="tabpanel">
          <div className="table-header">
            <div className="date-col">DATE</div>
            <div className="name-col">Conference Name</div>
            <div className="venue-col">VENUE</div>
          </div>
          {getCurrentEvents().map((event, index) => (
            <div key={event._id || index} className="table-row">
              <div className="date-col">{event.date}</div>
              <div className="name-col">{event.name}</div>
              <div className="venue-col">{event.venue}</div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="no-events">
              No conferences found for {selectedMonth}
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination" role="navigation" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
