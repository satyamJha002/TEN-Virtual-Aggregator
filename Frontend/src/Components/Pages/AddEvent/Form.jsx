import { useState } from "react";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import MonthYearDropdown from "./Month";

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
      <form>
        {/* Event Name */}
        <div className="mb-4">
          <label
            htmlFor="event-name"
            className="block text-sm font-medium mb-1"
          >
            Event Name:
          </label>
          <input
            type="text"
            id="event-name"
            placeholder="Enter an Event name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Title */}
        <div className="mb-4">
          <label
            htmlFor="event-title"
            className="block text-sm font-medium mb-1"
          >
            Event Title:
          </label>
          <input
            type="text"
            id="event-title"
            placeholder="Enter a Title"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Type */}
        <div className="mb-4">
          <label
            htmlFor="event-type"
            className="block text-sm font-medium mb-1"
          >
            Event Type:
          </label>
          <select
            name="eventType"
            id="event-type"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="">Select an Event Type </option>
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
            className="block text-sm font-medium mb-1"
          >
            Event Topics:
          </label>
          <select
            name="eventTopic"
            id="event-topic"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="">Select an Event Topic </option>
            {eventTopics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Event Location */}
        <h3 className="text-3xl  mt-6 mb-4">Event Location</h3>
        <hr className="mb-6" />

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium mb-1">
            Country:
          </label>
          <Select
            options={options}
            value={value}
            onChange={changeHandler}
            className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State:
          </label>
          <input
            type="text"
            id="state"
            placeholder="Enter State"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City:
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter the City"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Venue Address */}
        <div className="mb-4">
          <label
            htmlFor="venue-address"
            className="block text-sm font-medium mb-1"
          >
            Venue Address:
          </label>
          <input
            type="text"
            id="venue-address"
            placeholder="Enter Venue Address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Organized by */}
        <h3 className="text-3xl mt-6 mb-4">Event-Organized by</h3>
        <hr className="mb-6" />

        {/* Organizing Society */}
        <div className="mb-4">
          <label
            htmlFor="organization"
            className="block text-sm font-medium mb-1"
          >
            Organizing Society:
          </label>
          <input
            type="text"
            id="organization"
            placeholder="Enter Your Organization"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <label
            htmlFor="contact-person"
            className="block text-sm font-medium mb-1"
          >
            Contact person:
          </label>
          <input
            type="text"
            id="contact-person"
            placeholder="Enter name of contact person"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label
            htmlFor="contact-number"
            className="block text-sm font-medium mb-1"
          >
            Contact number:
          </label>
          <input
            type="tel"
            id="contact-number"
            placeholder="Enter contact number"
            inputMode="tel"
            pattern="[0-9]{10}"
            required
            maxLength="10"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            aria-label="Contact Number"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Website Address */}
        <div className="mb-4">
          <label htmlFor="website" className="block text-sm font-medium mb-1">
            Website Address:
          </label>
          <input
            type="text"
            id="website"
            placeholder="Enter URL of website"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Dates */}
        <h3 className="text-3xl  mt-6 mb-4">Event-Dates</h3>
        <hr className="mb-6" />

        {/* Event Month-Year */}
        <div className="mb-4">
          <label
            htmlFor="month-year"
            className="block text-sm font-medium mb-1"
          >
            Event Month-Year:
          </label>
          <MonthYearDropdown className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200" />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium mb-1"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="start-date"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="end-date" className="block text-sm font-medium mb-1">
            End Date:
          </label>
          <input
            type="date"
            id="end-date"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        {/* Submission Deadline */}
        <div className="mb-4">
          <label
            htmlFor="submission-deadline"
            className="block text-sm font-medium mb-1"
          >
            Submission Deadline:
          </label>
          <input
            type="date"
            id="submission-deadline"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setSubmissionDate(e.target.value)}
          />
        </div>

        {/* Registration Deadline */}
        <div className="mb-4">
          <label
            htmlFor="registration-deadline"
            className="block text-sm font-medium mb-1"
          >
            Registration Deadline:
          </label>
          <input
            type="date"
            id="registration-deadline"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>

        {/* Abstraction */}
        <div className="mb-4">
          <label
            htmlFor="abstraction"
            className="block text-sm font-medium mb-1"
          >
            Abstraction:
          </label>
          <textarea
            id="abstraction"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label
            htmlFor="event-description"
            className="block text-sm font-medium mb-1"
          >
            Event Description:
          </label>
          <textarea
            id="event-description"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button class="bg-red-800 text-white text-xl font-bold py-4 px-6 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
