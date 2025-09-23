import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    // ✅ Inject Google Ads conversion script (Book appointment)
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-17494004782/4gk-CKXcs6AbEK6o5ZVB'
      });
    `;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#7e4798]/10 to-white">
      <Helmet>
        <title>Thank You | Naturals Arulanthar Nagar</title>
        <meta
          name="description"
          content="Thank you for contacting Naturals Arulanthar Nagar. We will get back to you soon."
        />
      </Helmet>

      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#7e4798]/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We’ve received your message. Our team will get back to you shortly.
        </p>

        {/* Button */}
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full font-medium text-white bg-primary transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
