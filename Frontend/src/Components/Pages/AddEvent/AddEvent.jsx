import BrowseByCity from "./BrowseByCities";
import BrowseByCountry from "./BrowseByCountry";
import BrowseByTopics from "./BrowseByTopic";
import Form from "./Form";
import { useState, useEffect } from "react";

function AddEvent() {
  const [searchFilter, setSearchFilter] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

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
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-md flex flex-col items-start relative">
      {!isDesktop && (
        <div className="w-full flex flex-col items-start mb-4 md:hidden">
          <h3 className="m-w-xl mx-auto font-bold text-xl">
            Browse By
            <span className="block h-1 w-20 bg-red-800 absolute bottom-0 left-0"></span>
          </h3>

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

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-start">
        {/* Left Section: Add Events */}
        <div className="flex-1 w-full">
          <div className="px-6 py-4 bg-white border shadow-md" style={{borderRadius: "4px"}}>
            <Form />
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
    </div>
  );
}

export default AddEvent;
