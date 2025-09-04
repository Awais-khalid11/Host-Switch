import React from "react";
import { FiInbox } from "react-icons/fi";

const NoDataFound = ({
  message = "No data available",
  subMessage = "",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
          <FiInbox className="w-10 h-10 text-blue-500" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-200 rounded-full opacity-70"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 max-w-md">
        {message}
      </h3>

      {subMessage && (
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          {subMessage}
        </p>
      )}

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-transparent to-purple-50 rounded-lg"></div>
      </div>
    </div>
  );
};

export default NoDataFound;
