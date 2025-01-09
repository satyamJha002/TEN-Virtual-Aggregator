import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Research() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    mobile: "",
    researchField: "",
    interestedIn: "",
  });

  const location = useLocation();
  const { name, date, eventlocation } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            REGISTER NOW
          </button>
          <Link to="/submit" state={{ name }}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              PAPER SUBMISSION
            </button>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
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
              The upcoming (ICPMS-25) at Algiers, Algeria has been organized on
              9th - 10th January 2025 and scheduled to alleviate this exact
              challenge by serving as a focal point for reseachers in the
              discipline of Promotional Marketing Strategies from the world over
              to gather together, learn from one another, impart and propagate
              their expertise, and put in place policies and mechanisms that
              will safeguard the stedfast growth and advancement of Promotional
              Marketing Strategies. In addition, participants of this event will
              be privileged with numerous opportunities to ensure their own
              personal advancement - be it in their studies, research work,
              career, or entrepreneurial endeavors
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-4">OBJECTIVE</h2>
            <p className="text-gray-700 mb-4">
              The (ICPMS-25) aims to be this all-so-necessary rocket fuel of
              progress for the field of Promotional Marketing Strategies by
              providing everyone from students and educators to researchers,
              entrepreneurs, and industry professionals, the inspiration,
              intellectual stimulation, and radical ingenuity that they need to
              be able to go out there and achieve big things.
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
                "FLYER DOWNLOAD",
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
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email id"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <select
              className="w-full p-2 border rounded"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              <option value="">Select Country Code</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="FR">France</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="tel"
              placeholder="Mobile number"
              className="w-full p-2 border rounded"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Research Field"
              className="w-full p-2 border rounded"
              value={formData.researchField}
              onChange={(e) =>
                setFormData({ ...formData, researchField: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-600 text-white px-6 py-3 rounded"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
