import React, { useState } from "react";

const PaperSubmission = ({ name, date, city, country }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    paperTitle: "",
    institute: "",
    modeOfPresentation: "",
    journalPublication: "",
    comments: "",
    file: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <div className="md:col-span-3">
      <h2 className="text-2xl font-bold text-red-900 mb-6">Paper submission</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Name *</label>
            <input type="text" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email *</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Country Code *</label>
            <select className="w-full p-2 border rounded">
              <option>Choose The ISD</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Phone *</label>
            <input type="tel" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Paper Title *</label>
            <input type="text" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Institute *</label>
            <input type="text" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Conference Name *</label>
            <input
              type="text"
              value={name}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1">Date of conference *</label>
            <input
              type="text"
              value={date}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1">Conference City *</label>
            <input
              type="text"
              value={city}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1">Conference Country *</label>
            <input
              type="text"
              value={country}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1">Mode of Presentation *</label>
            <select className="w-full p-2 border rounded">
              <option>Oral Presentation</option>
              <option>Poster Presentation</option>
              <option>Virtual Presentation (Online Live attending)</option>
              <option>
                Video Presentation (Pre-recorded Video Presentation option)
              </option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Journal Publication *</label>
            <select className="w-full p-2 border rounded">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Comments *</label>
            <textarea
              placeholder="comments should be 100 characters"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1">Browse *</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-900 text-white px-8 py-2 rounded hover:bg-red-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaperSubmission;
