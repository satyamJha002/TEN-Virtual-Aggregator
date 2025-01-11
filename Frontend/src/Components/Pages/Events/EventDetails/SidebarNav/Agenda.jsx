import React from "react";

const Agenda = () => {
  return (
    <div className="md:col-span-3">
      <h2 className="text-2xl font-bold text-red-900 mb-6">
        Conference Agenda
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-red-900 mb-4">Day 1</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-100">
                <th className="border p-2 text-left">TIMING</th>
                <th className="border p-2 text-left">SESSION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">9:00 AM - 9:30 AM</td>
                <td className="border p-2">Registration</td>
              </tr>
              <tr>
                <td className="border p-2">9:30 AM - 10:00 AM</td>
                <td className="border p-2">Introduction</td>
              </tr>
              {/* Add other time slots */}
            </tbody>
          </table>
        </div>
        {/* Similar table for Day 2 */}
      </div>
    </div>
  );
};

export default Agenda;
