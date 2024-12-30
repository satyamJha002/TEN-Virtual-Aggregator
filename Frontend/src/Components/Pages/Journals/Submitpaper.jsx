import React, { useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const App = () => {
  const fileInputRef = useRef(null); // Reference for the file input
  const location = useLocation();
  const { title } = location.state || {};
  const [formData, setFormData] = useState({
    authorName: "",
    coAuthors: [""],
    email: "",
    phoneNumber: "",
    university: "",
    state: "",
    designation: "",
    department: "",
    country: "",
    file: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // File change handler with validation
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

  // Co-Author input change
  const handleCoAuthorChange = (index, value) => {
    const newCoAuthors = [...formData.coAuthors];
    newCoAuthors[index] = value;
    setFormData({ ...formData, coAuthors: newCoAuthors });
  };

  // Add a new co-author field
  const addCoAuthorField = () => {
    setFormData({ ...formData, coAuthors: [...formData.coAuthors, ""] });
  };

  // Remove a co-author field
  const removeCoAuthorField = (index) => {
    const newCoAuthors = [...formData.coAuthors];
    newCoAuthors.splice(index, 1);
    setFormData({ ...formData, coAuthors: newCoAuthors });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "coAuthors") {
        formData.coAuthors.forEach((coAuthor, index) => {
          data.append(`coAuthors[${index}]`, coAuthor);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("http://localhost:3000/submit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert(response.data.message || "Paper submitted successfully!");

        // Clear the form
        setFormData({
          authorName: "",
          coAuthors: [""],
          email: "",
          phoneNumber: "",
          university: "",
          state: "",
          designation: "",
          department: "",
          country: "",
          file: null,
        });

        // Clear the file input field
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Submission failed! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="welcome-section max-w-6xl my-8 sm:px-10"
        style={{ margin: "3rem auto" }}
      >
        <h2 className="border-red border-gray">{title}</h2>
      </div>
      <div className="max-w-4xl mx-auto mb-28 p-8 bg-gray-50 rounded-lg shadow-lg mx-4">
        <h1 className="text-3xl font-semibold text-center text-[#80011f] mb-6">
          Paper Submission
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          {/* Author Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Author's Name
            </label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              required
              className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Co-Authors */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Co-Authors' Names
            </label>
            {formData.coAuthors.map((coAuthor, index) => (
              <div key={index} className="flex items-center space-x-4 mb-2">
                <input
                  type="text"
                  value={coAuthor}
                  onChange={(e) => handleCoAuthorChange(index, e.target.value)}
                  className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => removeCoAuthorField(index)}
                  className="px-3 py-1 bg-[#80011f] text-white rounded hover:bg-red-600"
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCoAuthorField}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              + Add Co-Author
            </button>
          </div>

          {/* Other Inputs */}
          {[
            "email",
            "phoneNumber",
            "university",
            "state",
            "designation",
            "department",
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}

          {/* Country */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Select Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div>
            <input
              className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
              type="text"
              value={title}
              readOnly
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload File
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              ref={fileInputRef}
              required
              className="block w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-[#80011f] text-white rounded-md hover:bg-orange-700 disabled:bg-[#80011f]"
            >
              {isLoading ? "Submitting..." : "Submit Paper"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
