import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    coAuthorName: "",
    email: "",
    phoneNumber: "",
    university: "",
    state: "",
    designation: "",
    department: "",
    country: "",
    file: null,
  });

  const handleInputChange = (e) => {
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

    if (file && !validFileTypes.includes(file.type)) {
      alert("Please upload a valid file (.pdf, .doc, .docx)");
      return;
    }

    // Optional: Limit file size to 5MB
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert("File size should not exceed 5MB.");
      return;
    }

    setFormData({ ...formData, file });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare form data
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:3000/submit", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response); // Log full response to inspect
      if (response.status === 200) {
        alert(response.data.message || "Paper submitted successfully!");
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      if (error.response) {
        console.error("Response error data:", error.response.data);
        alert(`Error: ${error.response.data.error || "Submission failed!"}`);
      } else {
        alert("Network error or server issue.");
      }
    } finally {
      setIsLoading(false); // Set loading to false after submission attempt
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-semibold text-center text-orange-600 mb-6'>
        Paper Submission
      </h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-lg font-medium text-gray-700 mb-2'>
              Author's Name
            </label>
            <input
              type='text'
              name='authorName'
              value={formData.authorName}
              onChange={handleInputChange}
              required
              className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
            />
          </div>
          <div>
            <label className='block text-lg font-medium text-gray-700 mb-2'>
              Co-Author's Name
            </label>
            <input
              type='text'
              name='coAuthorName'
              value={formData.coAuthorName}
              onChange={handleInputChange}
              className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Phone Number
          </label>
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            University/Institute/Organization
          </label>
          <input
            type='text'
            name='university'
            value={formData.university}
            onChange={handleInputChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            State
          </label>
          <input
            type='text'
            name='state'
            value={formData.state}
            onChange={handleInputChange}
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Designation
          </label>
          <input
            type='text'
            name='designation'
            value={formData.designation}
            onChange={handleInputChange}
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Department
          </label>
          <input
            type='text'
            name='department'
            value={formData.department}
            onChange={handleInputChange}
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Select Country
          </label>
          <select
            name='country'
            value={formData.country}
            onChange={handleInputChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          >
            <option value=''>Select Country</option>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
          </select>
        </div>

        <div>
          <label className='block text-lg font-medium text-gray-700 mb-2'>
            Upload File
          </label>
          <input
            type='file'
            accept='.pdf,.doc,.docx'
            onChange={handleFileChange}
            required
            className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>

        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            disabled={isLoading}
            className='px-6 py-3 text-lg font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 disabled:bg-orange-400'
          >
            {isLoading ? "Submitting..." : "Submit Paper"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
