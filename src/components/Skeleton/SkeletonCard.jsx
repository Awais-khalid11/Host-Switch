import React from "react";

const SkeletonCard = ({ count = 3, className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          {/* Header Section */}
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-gray-300 h-16 w-16"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>

          {/* Body Section */}
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-gray-300 rounded"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>

          {/* Footer Section */}
          <div className="mt-4 flex justify-between items-center">
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            <div className="flex space-x-2">
              <div className="h-8 bg-gray-300 rounded w-20"></div>
              <div className="h-8 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
