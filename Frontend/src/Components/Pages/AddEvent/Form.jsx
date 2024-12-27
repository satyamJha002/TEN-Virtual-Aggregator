import { useState } from "react";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import MonthYearDropdown from "./Month";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "1px solid #A5B4FC" : "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    padding: "0.1rem",
    minHeight: "2.5rem", // Adjust height for better appearance
    boxShadow: state.isFocused ? "0 0 0 2px #E0E7FF" : "none",
    "&:hover": {
      borderColor: "#A5B4FC",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "gray",
    fontSize: "0.9rem",
  }),
  input: (provided) => ({
    ...provided,
    color: "#111827",
    fontSize: "0.9rem",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#9CA3AF",
    "&:hover": {
      color: "#6B7280",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    marginTop: "0.25rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #D1D5DB",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#A5B4FC"
      : state.isFocused
      ? "#E0E7FF"
      : "#fff",
    color: state.isSelected ? "#fff" : "#111827",
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "#E0E7FF",
      color: "#111827",
    },
  }),
};

const eventTypes = [
  "Conference",
  "Seminar",
  "Workshop",
  "Webinar",
  "Continuing Professional Development Event",
  "Online Conference",
];

const eventTopics = [
  "Medicine",
  "Mathematics",
  "Engineering",
  "Business",
  "Life Science",
  "Social",
  "Education",
  "Interdisciplinary",
  "Regional",
  "Law",
];

function Form() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submissionDate, setSubmissionDate] = useState(null);
  const [registrationDate, setRegistrationDate] = useState(null);
  function changeHandler(value) {
    setValue(value);
  }

  return (
    <div>
      <form className="px-4">
      <h3 className="text-2xl relative mb-8 border-red border-gray">
            Add Events
          </h3>
        {/* Event Description */}
        <h3 className="text-xl text-extrabold mb-2">Event Description</h3>
        <hr className="mb-6" />

        {/* Event Name */}
        <div className="mb-4">
          <label
            htmlFor="event-name"
            className="block text-md mb-2 text-gray mb-1"
          >
            Event Name :
          </label>
          <input
            type="text"
            id="event-name"
            placeholder="Enter Event Name"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Event Title */}
        <div className="mb-4">
          <label
            htmlFor="event-title"
            className="block text-md mb-2 text-gray mb-1"
          >
            Event Title :
          </label>
          <input
            type="text"
            id="event-title"
            placeholder="Enter Title"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Event Type */}
        <div className="mb-4">
  <label
    htmlFor="event-type"
    className="block text-md mb-2 text-gray mb-1"
  >
    Event Type :
  </label>
  <select
    name="eventType"
    id="event-type"
    className="custom-select"
    style={{color: "gray", fontSize: "0.9rem"}}
  >
    <option value="" >
      <span>Select Event Type</span>
    </option>
    {eventTypes.map((event, index) => (
      <option key={index} value={event}>
        {event}
      </option>
    ))}
  </select>
</div>


        {/* Event Topics */}
        <div className="mb-4">
          <label
            htmlFor="event-topic"
            className="block text-md mb-2 text-gray mb-1"
          >
            Event Topics :
          </label>
          <select
            name="eventTopic"
            id="event-topic"
            className="custom-select text-gray-900 appearance-none"
            style={{color: "gray", fontSize: "0.9rem"}}
          >
            <option value="" disabled selected className="text-gray-500">
              Select Event Topic 
            </option>
            {eventTopics.map((topic, index) => (
              <option key={index} value={topic} className="text-gray-500">
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Event Location */}
        <h3 className="text-xl mt-6 mb-2">Event Location</h3>
        <hr className="mb-6" />

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-md mb-2 text-gray mb-1">
            Country :
          </label>
          <Select
            options={options}
            value={value}
            onChange={changeHandler}
            styles={customStyles}
            placeholder="Select an option"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-md mb-2 text-gray mb-1">
            State :
          </label>
          <input
            type="text"
            id="state"
            placeholder="Enter State"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-md mb-2 text-gray mb-1">
            City :
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter The City"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Venue Address */}
        <div className="mb-4">
          <label
            htmlFor="venue-address"
            className="block text-md mb-2 text-gray mb-1"
          >
            Venue Address :
          </label>
          <input
            type="text"
            id="venue-address"
            placeholder="Enter Venue Address"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Event Organized by */}
        <h3 className="text-xl mt-6 mb-2">Event Organized By</h3>
        <hr className="mb-6" />

        {/* Organizing Society */}
        <div className="mb-4">
          <label
            htmlFor="organization"
            className="block text-md mb-2 text-gray mb-1"
          >
            Organizing Society :
          </label>
          <input
            type="text"
            id="organization"
            placeholder="Enter Your Organization"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <label
            htmlFor="contact-person"
            className="block text-md mb-2 text-gray mb-1"
          >
            Contact Person :
          </label>
          <input
            type="text"
            id="contact-person"
            placeholder="Enter Name of Contact Person"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label
            htmlFor="contact-number"
            className="block text-md mb-2 text-gray mb-1"
          >
            Contact Number :
          </label>
          <input
            type="tel"
            id="contact-number"
            placeholder="Enter Contact Number"
            inputMode="tel"
            pattern="[0-9]{10}"
            required
            maxLength="10"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
            aria-label="Contact Number"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-md mb-2 text-gray mb-1">
            Email Address :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Website Address */}
        <div className="mb-4">
          <label htmlFor="website" className="block text-md mb-2 text-gray mb-1">
            Website Address :
          </label>
          <input
            type="text"
            id="website"
            placeholder="Enter URL of Website"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
          />
        </div>

        {/* Event Dates */}
        <h3 className="text-xl mt-6 mb-2">Event-Dates</h3>
        <hr className="mb-6" />

        {/* Event Month-Year */}
        <div className="mb-4">
          <label
            htmlFor="month-year"
            className="block text-md mb-2 mb-1"
          >
            Event Month-Year :
          </label>
          <MonthYearDropdown className="custom-select"/>
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label
            htmlFor="start-date"
            className="block text-md mb-2 text-gray mb-1"
          >
            Start Date :
          </label>
          <input
            type="date"
            id="start-date"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="end-date" className="block text-md mb-2 text-gray mb-1">
            End Date :
          </label>
          <input
            type="date"
            id="end-date"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* Submission Deadline */}
        <div className="mb-4">
          <label
            htmlFor="submission-deadline"
            className="block text-md mb-2 text-gray mb-1"
          >
            Submission Deadline :
          </label>
          <input
            type="date"
            id="submission-deadline"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
            onChange={(e) => setSubmissionDate(e.target.value)}
          />
        </div>

        {/* Registration Deadline */}
        <div className="mb-4">
          <label
            htmlFor="registration-deadline"
            className="block text-md mb-2 text-gray mb-1"
          >
            Registration Deadline :
          </label>
          <input
            type="date"
            id="registration-deadline"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 text-base"
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>

        {/* Abstraction */}
        <div className="mb-4">
          <label
            htmlFor="abstraction"
            className="block text-md mb-2 text-gray mb-1"
          >
            Abstraction :
          </label>
          <textarea
            id="abstraction"
            style={{borderRadius: "4px"}}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label
            htmlFor="event-description"
            className="block text-md mb-2 text-gray mb-1"
          >
            Event Description :
          </label>
          <textarea
            id="event-description"
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            style={{borderRadius: "4px"}}
          />
        </div>
        <div className="w-100 text-center">
        <button className="bg-red-800 text-white text-md font-bold px-4 m-4 py-2" style={{borderRadius: "4px"}}>
          Submit 
        </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
