import React from "react";

const NoDataFound = ({
  message = "No data available",
  subMessage = "",
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-50 border border-gray-200 rounded-lg p-6 text-center ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{message}</h3>
      {subMessage && <p className="text-sm text-gray-500">{subMessage}</p>}
    </div>
  );
};

export default NoDataFound;
