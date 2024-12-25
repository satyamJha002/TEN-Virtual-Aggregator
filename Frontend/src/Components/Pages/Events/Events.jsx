import React, { useState } from "react";
import "./Events.css";

const months = [
  "All",
  "December",
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
];

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");

  const events = [
    {
      date: "18-12-2024",
      name: "International Conference on Economics and Business (ICEBUS-24)",
      venue: "Buenos Aires, Argentina",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Management Accountant (ICMA-24)",
      venue: "Montreal, Canada",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Health Data Repository Management Strategies (ICHDRMS-24)",
      venue: "Bali, Indonesia",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Business and Artificial Intelligence Technologies (ICBAIT-24)",
      venue: "Tokyo, Japan",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Accounting and Finance (ICACFI-24)",
      venue: "Kathmandu, Nepal",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Personalized Marketing and Applications (ICPMA-24)",
      venue: "Manila, Philippines",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Forest Economics and Natural Resources (ICFENR-24)",
      venue: "Abu Dhabi, UAE",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Sport Finance and Management (ICSFM-24)",
      venue: "Chicago, USA",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Novel Materials and Sustainable Chemistry (ICNMSC-24)",
      venue: "Basrah, Iraq",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Distance Education and Language Learning Innovations (ICDELLI-24)",
      venue: "Puno, Peru",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Sport Finance and Management (ICSFM-24)",
      venue: "Chicago, USA",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Novel Materials and Sustainable Chemistry (ICNMSC-24)",
      venue: "Basrah, Iraq",
      month: "December",
    },
    {
      date: "18-12-2024",
      name: "International Conference on Distance Education and Language Learning Innovations (ICDELLI-24)",
      venue: "Puno, Peru",
      month: "December",
    },
  ];

  const filteredEvents =
    selectedMonth === "All"
      ? events
      : events.filter((event) => event.month === selectedMonth);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const getCurrentEvents = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredEvents.slice(startIndex, endIndex);
  };

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
          <h1 className="border-red border-gray">Upcoming International Conferences</h1>
          <div className="month-navigation">
            {months.map((month) => (
              <button
                key={month}
                className={`month-btn ${
                  selectedMonth === month ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedMonth(month);
                  setCurrentPage(1);
                }}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div className="events-table">
          <div className="table-header">
            <div className="date-col">DATE</div>
            <div className="name-col">Conference Name</div>
            <div className="venue-col">VENUE</div>
          </div>
          {getCurrentEvents().map((event, index) => (
            <div key={index} className="table-row">
              <div className="date-col">{event.date}</div>
              <div className="name-col">{event.name}</div>
              <div className="venue-col">{event.venue}</div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
        {filteredEvents.length === 0 && (
          <div className="no-events">
            No conferences found for {selectedMonth}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
