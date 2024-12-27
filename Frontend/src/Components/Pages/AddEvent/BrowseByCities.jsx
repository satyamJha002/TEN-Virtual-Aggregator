import React, {useState} from "react";

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
  const [isActive, setIsActive] = useState(false);
  
    // Flatten the list and exclude "India"
    const allCities = Object.values(cities)
      .flat()
  
    const toggleDropdown = () => {
      setIsActive(!isActive);
    };

  return (
    <div className="bg-gray-100 p-4 mb-8" style={{borderRadius: "4px"}}>
      <h2
        className="text-2xl cursor-pointer border-red border-gray items-center mb-4 justify-between md:block hidden"
        onClick={toggleDropdown}
        aria-expanded={isActive}
      >
        Browse By City
      </h2>
      {/* Responsive grid: 1 column for mobile and 2 columns for tablet and up */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              borderRadius: "4px",
              fontSize: "0.8rem",
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
