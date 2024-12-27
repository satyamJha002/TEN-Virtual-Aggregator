import { useState } from "react";

const countries = {
  Asia: [
    "Indonesia",
    "India",
    "Malaysia",
    "UAE",
    "Singapore",
    "Bangkok",
    "Maldives",
    "Iraq",
    "Israel",
    "Bangladesh",
    "Bhutan",
    "China",
    "Iran",
    "Japan",
    "South Korea",
    "Kuwait",
    "Mongolia",
    "Nepal",
    "Oman",
    "Pakistan",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Sri Lanka",
    "Thailand",
  ],
  "USA & Americas": ["USA", "Canada", "Brazil", "Mexico"],
  Europe: [
    "Austria",
    "Belgium",
    "Czech",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Ireland",
    "Italy",
    "Nether lands",
    "Norway",
    "Poland",
    "Russia",
    "Spain",
    "Sweden",
    "Switzer land",
    "Turkey",
    "UK",
    "Ukraine",
  ],
  Oceania: ["Australia", "New Zealand"],
};

function BrowseByCountry() {
  const [isActive, setIsActive] = useState(false);

  // Flatten the list and exclude "India"
  const allCountries = Object.values(countries)
    .flat()
    .filter((country) => country !== "India");

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="p-4 bg-gray-100 mb-6" style={{borderRadius: "4px"}}>
      {/* Header - Hidden in Mobile */}
      <h2
        className="text-2xl cursor-pointer border-red border-gray items-center justify-between md:block hidden"
        onClick={toggleDropdown}
        aria-expanded={isActive}
        aria-controls="country-list"
      >
        Browse By Country
      </h2>

      {/* Country List */}
      <div
        id="country-list"
        className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-4"
        aria-hidden={!isActive}
      >
        {allCountries.map((country) => (
          <button
            key={country}
            className="bg-white text-gray-800 font-medium py-2  rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label={`Browse ${country}`}
            style={{fontSize: "0.8rem"}}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BrowseByCountry;
