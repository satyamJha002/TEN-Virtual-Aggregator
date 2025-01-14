import React, { useState } from "react";
import axios from "axios";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file && !validFileTypes.includes(file.type)) {
      alert("Please upload a valid file (.pdf, .doc, .docx)");
      return;
    }

    if (file.size > maxSize) {
      alert("File size should not exceed 5MB.");
      return;
    }
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("conferenceName", name);
    data.append("conferenceCity", city);
    data.append("conferenceCountry", country);
    data.append("dateOfConference", date);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/paper-submission",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      alert("Paper submitted successfully");
      setFormData({
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
    } catch (error) {
      alert("Error submitting paper. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:col-span-3">
      <h2 className="text-2xl font-bold text-red-900 mb-6">Paper submission</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Country Code *</label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Choose The ISD</option>
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Paper Title *</label>
            <input
              type="text"
              name="paperTitle"
              value={formData.paperTitle}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Institute *</label>
            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
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
            <select
              name="modeOfPresentation"
              value={formData.modeOfPresentation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
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
            <select
              name="journalPublication"
              value={formData.journalPublication}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Comments *</label>
            <textarea
              placeholder="comments should be 100 characters"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1">Browse *</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-900 text-white px-8 py-2 rounded hover:bg-red-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PaperSubmission;
