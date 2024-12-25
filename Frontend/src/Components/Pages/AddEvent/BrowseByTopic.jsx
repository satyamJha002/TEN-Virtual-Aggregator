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

import React from "react";

function BrowseByTopics() {
  return (
    <div className="bg-gray-100 p-8">
      {/* Heading - Hidden on Mobile */}
      <h2 className="text-2xl font-bold mb-4 md:block hidden">
        Browse By Topics
      </h2>

      <div className="space-y-2">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
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
