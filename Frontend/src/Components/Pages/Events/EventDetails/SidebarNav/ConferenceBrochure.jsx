import React from "react";

const ConferenceBrochure = () => {
  return (
    <div className="md:col-span-3">
      <h2 className="text-2xl font-bold text-red-900 mb-6">
        Fill Form To Download Brochure
      </h2>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Full name</label>
            <input type="text" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Phone Number</label>
            <input type="tel" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email Id</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="g-recaptcha" />
          <button
            type="submit"
            className="bg-red-900 text-white px-8 py-2 rounded hover:bg-red-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConferenceBrochure;
