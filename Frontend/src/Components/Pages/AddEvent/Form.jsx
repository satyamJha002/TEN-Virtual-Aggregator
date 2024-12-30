import { useState } from "react";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import MonthYearDropdown from "./Month";
import useFetch from "../../../customAPI/useFetch";
import { toast } from "react-toastify";

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
  const [formData, setFormData] = useState({
    eventName: "",
    eventTitle: "",
    eventType: "",
    eventTopic: "",
    country: "",
    state: "",
    city: "",
    venueAddress: "",
    organizingSociety: "",
    contactPerson: "",
    contactNumber: "",
    emailAddress: "",
    websiteAddress: "",
    eventMonthYear: "",
    startDate: "",
    endDate: "",
    submissionDeadline: "",
    registrationDeadline: "",
    abstracts: "",
    eventDescription: "",
  });

  const {
    eventName,
    eventTitle,
    eventType,
    eventTopic,
    country,
    state,
    city,
    venueAddress,
    organizingSociety,
    contactPerson,
    contactNumber,
    emailAddress,
    websiteAddress,
    eventMonthYear,
    startDate,
    endDate,
    submissionDeadline,
    registrationDeadline,
    abstracts,
    eventDescription,
  } = formData;

  const options = useMemo(() => countryList().getData(), []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleEventTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      eventType: e.target.value,
    }));
  };

  const handleEventTopicChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      eventTopic: e.target.value,
    }));
  };

  const handleCountryChange = (selectedOption) => {
    console.log(selectedOption.label);
    setFormData((prev) => ({
      ...prev,
      country: selectedOption ? selectedOption?.label : "",
    }));
  };
  const handleMonthYearChange = (selectedMonthYear) => {
    setFormData((prev) => ({
      ...prev,
      eventMonthYear: selectedMonthYear,
    }));
  };

  const handleStartDateChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      startDate: value,
    }));
  };

  const handleEndDateChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      endDate: value,
    }));
  };

  const handleSetSubmissionDate = (value) => {
    setFormData((prev) => ({
      ...prev,
      submissionDeadline: value,
    }));
  };

  const handleRegistrationDate = (value) => {
    setFormData((prev) => ({
      ...prev,
      registrationDeadline: value,
    }));
  };

  const { fetchData, loading, error } = useFetch(
    "http://localhost:3000/api/addevent",
    "POST"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      eventName,
      eventTitle,
      eventType,
      eventTopic,
      country,
      state,
      city,
      venueAddress,
      organizingSociety,
      contactPerson,
      contactNumber,
      emailAddress,
      websiteAddress,
      eventMonthYear,
      startDate,
      endDate,
      submissionDeadline,
      registrationDeadline,
      abstracts,
      eventDescription,
    ];

    console.log(formData);

    for (let field of requiredFields) {
      if (!field) {
        toast.error("All fields are required!");
        return;
      }
    }

    const payload = {
      eventName,
      eventTitle,
      eventType,
      eventTopic,
      country,
      state,
      city,
      venueAddress,
      organizingSociety,
      contactPerson,
      contactNumber,
      emailAddress,
      websiteAddress,
      eventMonthYear,
      startDate,
      endDate,
      submissionDeadline,
      registrationDeadline,
      abstracts,
      eventDescription,
    };

    try {
      const response = await fetchData(payload);
      if (response.success) {
        toast.success(
          "Your event data has been sent to the admin, he will be contact you."
        );
        setFormData({
          eventName: "",
          eventTitle: "",
          eventType: "",
          eventTopic: "",
          country: "",
          state: "",
          city: "",
          venueAddress: "",
          organizingSociety: "",
          contactPerson: "",
          contactNumber: "",
          emailAddress: "",
          websiteAddress: "",
          eventMonthYear: "",
          startDate: "",
          endDate: "",
          submissionDeadline: "",
          registrationDeadline: "",
          abstracts: "",
          eventDescription: "",
        });
      } else {
        toast.error(response.error || "An unexpected error occured");
      }
    } catch (error) {
      toast.error(
        "An error occurred while sending your event data. Please try again."
      );
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form className="px-4" onSubmit={handleSubmit}>
        {loading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            LOADING....
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <h3 className="text-2xl relative mb-8 border-red border-gray">
          Add Events
        </h3>
        {/* Event Description */}
        <h3 className="text-xl text-extrabold mb-2">Event Description</h3>
        <hr className="mb-6" />
        {/* Event Name */}
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-md text-gray mb-1">
            Event Name :
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={handleInputChange}
            placeholder="Enter Event Name"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
          />
        </div>
        {/* Event Title */}
        <div className="mb-4">
          <label htmlFor="eventTitle" className="block text-md text-gray mb-1">
            Event Title :
          </label>
          <input
            type="text"
            id="eventTitle"
            value={eventTitle}
            onChange={handleInputChange}
            placeholder="Enter Title"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Event Type */}
        <div className="mb-4">
          <label htmlFor="eventType" className="block text-md mb-2 text-gray">
            Event Type :
          </label>
          <select
            name="eventType"
            id="eventType"
            className="custom-select"
            style={{ color: "gray", fontSize: "0.9rem" }}
            value={eventType}
            onChange={handleEventTypeChange}
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        {/* Event Topic */}
        <div className="mb-4">
          <label htmlFor="eventTopic" className="block text-md mb-2 text-gray">
            Event Topics :
          </label>
          <select
            name="eventTopic"
            id="eventTopic"
            className="custom-select text-gray-900 appearance-none"
            style={{ color: "gray", fontSize: "0.9rem" }}
            value={eventTopic}
            onChange={handleEventTopicChange}
          >
            <option value="" disabled>
              Select Event Topic
            </option>
            {eventTopics.map((topic, index) => (
              <option key={index} value={topic}>
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
          <label className="block text-md mb-2 text-gray">Country:</label>
          <Select
            options={options}
            id="country"
            value={options.find((option) => option.label === country)}
            onChange={handleCountryChange}
            styles={customStyles}
            placeholder="Select an option"
          />
        </div>
        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-md mb-2 text-gray">
            State :
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={handleInputChange}
            placeholder="Enter State"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-md mb-2 text-gray">
            City :
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter The City"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
          />
        </div>
        {/* Venue Address */}
        <div className="mb-4">
          <label
            htmlFor="venueAddress"
            className="block text-md mb-2 text-gray"
          >
            Venue Address :
          </label>
          <input
            type="text"
            id="venueAddress"
            value={venueAddress}
            onChange={handleInputChange}
            placeholder="Enter Venue Address"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Event Organized by */}
        <h3 className="text-xl mt-6 mb-2">Event Organized By</h3>
        <hr className="mb-6" />
        {/* Organizing Society */}
        <div className="mb-4">
          <label
            htmlFor="organizingSociety"
            className="block text-md mb-2 text-gray"
          >
            Organizing Society :
          </label>
          <input
            type="text"
            id="organizingSociety"
            value={organizingSociety}
            onChange={handleInputChange}
            placeholder="Enter Your Organization"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Contact Person */}
        <div className="mb-4">
          <label
            htmlFor="contactPerson"
            className="block text-md mb-2 text-gray"
          >
            Contact Person :
          </label>
          <input
            type="text"
            id="contactPerson"
            value={contactPerson}
            onChange={handleInputChange}
            placeholder="Enter Name of Contact Person"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Contact Number */}
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-md mb-2 text-gray"
          >
            Contact Number :
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={handleInputChange}
            placeholder="Enter Contact Number"
            required
            maxLength="10"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
            aria-label="Contact Number"
          />
        </div>
        {/* Email Address */}
        <div className="mb-4">
          <label
            htmlFor="emailAddress"
            className="block text-md mb-2 text-gray"
          >
            Email Address :
          </label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={handleInputChange}
            placeholder="Enter Email Address"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Website Address */}
        <div className="mb-4">
          <label
            htmlFor="websiteAddress"
            className="block text-md mb-2 text-gray"
          >
            Website Address :
          </label>
          <input
            type="text"
            id="websiteAddress"
            value={websiteAddress}
            onChange={handleInputChange}
            placeholder="Enter URL of Website"
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
          />
        </div>
        {/* Event Dates */}
        <h3 className="text-xl mt-6 mb-2">Event-Dates</h3>
        <hr className="mb-6" />
        {/* Event Month-Year */}
        <div className="mb-4">
          <label className="block text-md mb-2">Event Month-Year :</label>
          <MonthYearDropdown
            id="eventMonthYear"
            value={eventMonthYear}
            onChange={handleMonthYearChange}
            className="custom-select"
          />
        </div>
        {/* Start Date */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-md mb-2 text-gray">
            Start Date :
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
            onChange={(e) => handleStartDateChange(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>
        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-md mb-2 text-gray">
            End Date :
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
            onChange={(e) => handleEndDateChange(e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>
        {/* Submission Deadline */}
        <div className="mb-4">
          <label
            htmlFor="submission-deadline"
            className="block text-md mb-2 text-gray"
          >
            Submission Deadline :
          </label>
          <input
            type="date"
            id="submissionDeadline"
            value={submissionDeadline}
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900"
            onChange={(e) => handleSetSubmissionDate(e.target.value)}
          />
        </div>
        {/* Registration Deadline */}
        <div className="mb-4">
          <label
            htmlFor="registration-deadline"
            className="block text-md mb-2 text-gray"
          >
            Registration Deadline :
          </label>
          <input
            type="date"
            id="registrationDeadline"
            value={registrationDeadline}
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray text-gray-900 "
            onChange={(e) => handleRegistrationDate(e.target.value)}
          />
        </div>
        {/* Abstraction */}
        <div className="mb-4">
          <label htmlFor="abstracts" className="block text-md mb-2 text-gray">
            Abstraction :
          </label>
          <textarea
            id="abstracts"
            value={abstracts}
            onChange={handleInputChange}
            style={{ borderRadius: "4px" }}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        {/* Event Description */}
        <div className="mb-4">
          <label
            htmlFor="eventDescription"
            className="block text-md mb-2 text-gray"
          >
            Event Description :
          </label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={handleInputChange}
            className="w-full text-sm border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="w-100 text-center">
          <button
            type="submit"
            className="bg-red-800 text-white text-md font-bold px-4 m-4 py-2"
            style={{ borderRadius: "4px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
