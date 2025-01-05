import React from "react";

const Register = () => {
  return (
    <div className="md:col-span-3">
      <h2 className="text-2xl font-bold text-red-900 mb-6">
        Author/Co-Author Registration Fee Includes:
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Participation in the technical program of upto two author/co-authors
        </li>
        <li>Welcome reception</li>
        <li>Badge</li>
        <li>Research Foundation Conference Bag</li>
        <li>Conference Accessories/Kits</li>
        <li>Certificates for author and co-authors</li>
        <li>Research Foundation Conference Proceeding</li>
        <li>Research Foundation Conference Proceeding CD</li>
        <li>Coffee breaks</li>
        <li>Lunch</li>
        <li>Awards Ceremony</li>
      </ul>

      <h3 className="text-xl font-bold text-red-900 mt-8 mb-4">STEP 1</h3>
      <p className="mb-4">
        At least one author of each accepted paper must be registered for the
        conference...
      </p>

      {/* Add other steps and registration details */}
    </div>
  );
};

export default Register;
