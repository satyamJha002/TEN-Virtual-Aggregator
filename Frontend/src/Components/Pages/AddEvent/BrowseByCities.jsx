import React from "react";

const cities = [
  "Bangalore",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Vadodara",
  "Ludhiana",
  "Bhopal",
  "Patna",
  "Indore",
  "Nashik",
];

function BrowseByCity() {
  return (
    <div className="bg-gray-100 p-8">
      {/* Responsive grid: 1 column for mobile and 2 columns for tablet and up */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <button
            key={city}
            className="bg-red-800 text-white font-bold py-2 text-center
                       w-full after:content-[''] after:absolute after:top-1/2 after:right-0
                       after:-translate-y-1/2 after:border-l-[10px] after:border-t-[10px]
                       after:border-b-[10px] after:border-l-transparent
                       after:border-t-transparent after:border-b-transparent
                       after:border-r-red-800 hover:bg-red-700 transition-all rounded"
            style={{
              maxWidth: "280px", // Set consistent width for the button
              position: "relative", // Required for the arrow styling
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BrowseByCity;
