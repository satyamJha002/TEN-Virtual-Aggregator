import React, { useState } from "react";
import qr from "../../../../../../public/qr.jpg";

const Register = () => {
  const [showQrCode, setShowQrCode] = useState(false);

  const handleShowQrCode = () => {
    setShowQrCode(true);
  };

  const handleHideQrCode = () => {
    setShowQrCode(false);
  };

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
        conference for that paper to appear in the proceedings and be scheduled
        for presentation. Participating members may register as per the
        following charges:
      </p>
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-xl font-bold text-red-900">
          Your Total Payment:
        </span>
        <button
          className="bg-red-900 text-white px-4 py-2 rounded-md"
          onClick={showQrCode ? handleHideQrCode : handleShowQrCode}
        >
          {showQrCode ? "Hide QR Code" : "Register Online"}
        </button>

        {showQrCode && (
          <div className="mt-4">
            <img
              src={qr}
              alt="QR Code"
              className="max-w-[200px] max-h-[200px]"
            />
          </div>
        )}
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span>
              For students registering late an extra amount of USD 20 will be
              charged.
            </span>
          </li>
          <li>
            <span>
              Registered members are asked to intimate about the registration
              immediately after the payment.
            </span>
          </li>
          <li>
            <span>
              For any queries, please contact us at{" "}
              <a href="mailto:info@virtualconference.com">
                info@virtualconference.com
              </a>
            </span>
          </li>
          <li>
            <span>
              Any modification in the paper will not be accepted after the final
              submission date.
            </span>
          </li>
          <li>
            <span>
              Maximum up to five authors/ co authors per paper is allowed for
              participate.
            </span>
          </li>
          <li>
            <span>
              No registration will be entertained after last date of
              registration.
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-red-900 mt-8 mb-4">STEP 2</h3>
      <span className="text-lg font-bold text-red-900">
        Mail Bank Statement
      </span>
      <p className="mb-4">
        Once you have transfered the registration fees mail the screen shot of
        online transaction to{" "}
        <em>
          info@info@academicworldresearch.org(With your complete registration
          details)
        </em>
      </p>

      <h3 className="text-xl font-bold text-red-900 mt-8 mb-4">STEP 3</h3>
      <span className="text-lg font-bold text-red-900">
        Camera Ready Paper Submission
      </span>
      <p className="mb-4">Submit Camera ready paper as per the guidelines.</p>
    </div>
  );
};

export default Register;
