import React, { useEffect, useState } from "react";

function MonthYearDropdown({ className, onChange }) {
  const [selectedMonthYear, setSelectedMonthYear] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);

  const monthYearOptions = years.flatMap((year) =>
    months.map((month) => `${month}-${year}`)
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedMonthYear(value);
    onChange(value);
  };

  return (
    <select
      value={selectedMonthYear}
      onChange={handleChange}
      className={className}
      style={{ color: "gray", fontSize: "0.9rem" }}
    >
      <option value="">Select the Month & Year</option>
      {monthYearOptions.map((monthYear, index) => (
        <option key={index} value={monthYear}>
          {monthYear}
        </option>
      ))}
    </select>
  );
}

export default MonthYearDropdown;
