import React from "react";

const NoDataFound = ({
  message = "No data available",
  subMessage = "Please try again later or contact support if the problem persists.",
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-50 border border-gray-200 rounded-lg p-6 text-center ${className}`}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-2">{message}</h3>
      <p className="text-gray-600 text-sm">{subMessage}</p>
    </div>
  );
};

export default NoDataFound;
