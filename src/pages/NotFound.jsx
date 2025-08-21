import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react"; // using lucide icons for nicer UI

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <p className="text-5xl font-extrabold text-blue-600">404</p>
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-500">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 hover:shadow-md transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
