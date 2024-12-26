const topics = [
  "Engineering",
  "Social Sciences and Humanities",
  "Interdisciplinary",
  "Health and Medicine",
  "Regional Studies",
  "Mathematics and statistics",
  "Business and Economics",
  "Law",
  "Education",
  "Life Science",
];

import React, { useState } from "react";

function BrowseByTopics() {
  const [isActive, setIsActive] = useState(false);

  // Flatten the list and exclude "India"
  const topic = Object.values(topics).flat();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-gray-100 p-4" style={{ borderRadius: "4px" }}>
      {/* Heading - Hidden on Mobile */}
      <h2
        className="text-2xl font-semibold cursor-pointer border-red border-gray items-center mb-4 justify-between md:block hidden"
        onClick={toggleDropdown}
        aria-expanded={isActive}
      >
        Browse By Topics
      </h2>

      <div className="space-y-2">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="world"
              height="20"
              width="20"
            >
              <path d="M13.485 1.757l-8.486 8.485-3.182-3.182a.5.5 0 0 0-.707.707l3.536 3.536a.5.5 0 0 0 .707 0L14.192 2.464a.5.5 0 0 0-.707-.707z" />
            </svg>

            <p className="text-gray-800">{topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByTopics;
