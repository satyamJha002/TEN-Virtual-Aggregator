import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Research() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    mobile: "",
    researchField: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { name, date, eventlocation } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/research",
        formData
      );
      console.log(response);
      alert("Research submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Error submitting research");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-red-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">(ICPMS-25)</h1>
        <h2 className="text-xl mb-4">{name.toUpperCase()}</h2>
        <p className="mb-4">
          DATE : {date} | {eventlocation.split(",")[0].toUpperCase()},
          {eventlocation.split(",")[1].toUpperCase()}
        </p>
        <p className="text-yellow-300 mb-6">PHYSICAL / DIGITAL CONFERENCE</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled
          >
            REGISTER NOW
          </button>
          <Link to="/submit" state={{ name }}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              PAPER SUBMISSION
            </button>
          </Link>
          {}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled
          >
            ONLINE PRESENTATION
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {/* Objective Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-4">OVERVIEW</h2>
            <p className="text-gray-700 mb-4">
              This exact challenge will be lessened by the upcoming
              International Conference on Promotional Marketing Strategies
              (ICPMS-25) in Algiers, Algeria, which is scheduled for January
              9–10, 2025. It will serve as a hub for researchers in the field of
              Promotional Marketing Strategies from around the globe to come
              together, share and exchange knowledge, and establish policies and
              procedures that will ensure the discipline's unwavering growth and
              advancement. Additionally, attendees of this event will have
              access to a wealth of chances to secure their own personal growth,
              whether in their academic pursuits, research projects, careers, or
              business ventures.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-4">OBJECTIVE</h2>
            <p className="text-gray-700 mb-4">
              By giving everyone—from students and educators to researchers,
              entrepreneurs, and industry professionals—the motivation,
              intellectual stimulation, and radical ingenuity they need to go
              out there and accomplish great things, the ICPMS-25 seeks to be
              the much-needed rocket fuel of advancement for the field of
              promotional marketing strategies.
            </p>
          </section>
        </div>

        {/* Downloads Section */}
        <section className="mb-12 grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-1">
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-4">DOWNLOADS</h2>
            <div className="flex flex-col gap-2">
              {[
                "SAMPLE ABSTRACT",
                "PRESENTER REGISTRATION FORM",
                "LISTENER REGISTRATION FORM",
                "SAMPLE FULL PAPER",
              ].map((item) => (
                <button
                  key={item}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              IMPORTANT DATES
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800 text-white p-6 rounded">
                <h3 className="font-bold mb-2">Pre-registration Deadline</h3>
                <p>10th December 2024</p>
              </div>
              <div className="bg-red-800 text-white p-6 rounded">
                <h3 className="font-bold mb-2">
                  Last Date For Abstract Submission
                </h3>
                <p>20th-Dec-2024</p>
              </div>
              <div className="bg-red-800 text-white p-6 rounded">
                <h3 className="font-bold mb-2">
                  General Registration Deadline
                </h3>
                <p>25th-Dec-2024</p>
              </div>
              <div className="bg-red-800 text-white p-6 rounded">
                <h3 className="font-bold mb-2">Date of Conference</h3>
                <p>9th - 10th January 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            EVENT SUBSCRIPTION
          </h2>
          <form onSubmit={handleSubmit} className="max-w-full space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email id"
              className="w-full p-2 border rounded"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              className="w-full p-2 border rounded"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country Code</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="FR">France</option>
              <option value="AL">Algeria</option>
              <option value="EG">Egypt</option>
              <option value="SA">Saudi Arabia</option>
              <option value="QA">Qatar</option>
              <option value="AE">United Arab Emirates</option>
              <option value="KW">Kuwait</option>
              <option value="BH">Bahrain</option>
              <option value="OM">Oman</option>
            </select>
            <input
              type="tel"
              placeholder="Mobile number"
              className="w-full p-2 border rounded"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Research Field"
              className="w-full p-2 border rounded"
              name="researchField"
              value={formData.researchField}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-600 text-white px-6 py-3 rounded"
            >
              {isLoading ? "Loading..." : "SUBSCRIBE"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
