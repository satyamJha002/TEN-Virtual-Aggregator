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
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 8a7.9 7.9 0 1 0 0-7.9A7.9 7.9 0 0 0 8 8zm0-5a1.9 1.9 0 1 1 0 3.8A1.9 1.9 0 0 1 8 3z" />
            </svg>
            <p className="text-gray-800">{topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByTopics;
