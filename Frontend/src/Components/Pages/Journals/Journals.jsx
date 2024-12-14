import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    coAuthors: [""], // Start with one co-author field
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

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert("File size should not exceed 5MB.");
      return;
    }

    setFormData({ ...formData, file });
  };

  const handleCoAuthorChange = (index, value) => {
    const newCoAuthors = [...formData.coAuthors];
    newCoAuthors[index] = value;
    setFormData({ ...formData, coAuthors: newCoAuthors });
  };

  const addCoAuthorField = () => {
    setFormData({ ...formData, coAuthors: [...formData.coAuthors, ""] });
  };

  const removeCoAuthorField = (index) => {
    const newCoAuthors = [...formData.coAuthors];
    newCoAuthors.splice(index, 1);
    setFormData({ ...formData, coAuthors: newCoAuthors });
  };

  const [isLoading, setIsLoading] = useState(false);

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
    <div className='max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-semibold text-center text-orange-600 mb-6'>
        Paper Submission
      </h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
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
            Co-Authors' Names
          </label>
          {formData.coAuthors.map((coAuthor, index) => (
            <div key={index} className='flex items-center space-x-4 mb-2'>
              <input
                type='text'
                value={coAuthor}
                onChange={(e) => handleCoAuthorChange(index, e.target.value)}
                className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <button
                type='button'
                onClick={() => removeCoAuthorField(index)}
                className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
              >
                -
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={addCoAuthorField}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >
            + Add Co-Author
          </button>
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
            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'"
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
