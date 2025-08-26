import React from "react";

const Skeleton = ({
  count = 3,
  variant = "card",
  rows = 3,
  hasImage = false,
  hasButtons = false,
  className = "",
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case "avatar":
        return (
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-300 h-12 w-12"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        );
      case "table":
        return (
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-10 w-full"></div>
            <div className="divide-y divide-gray-200">
              {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="flex items-center">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-6 bg-gray-300 rounded m-2 flex-1"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case "list":
        return (
          <div className="space-y-2">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="h-3 bg-gray-300 rounded w-full"></div>
            ))}
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            {Array.from({ length: rows }).map((_, i) => (
              <div
                key={i}
                className={`h-3 bg-gray-300 rounded ${
                  i % 2 === 0 ? "w-5/6" : "w-3/4"
                }`}
              ></div>
            ))}
          </div>
        );

      case "card":
      default:
        return (
          <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
            {hasImage && (
              <div className="rounded-lg bg-gray-300 h-40 w-full mb-4"></div>
            )}

            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>

            {rows > 0 && (
              <div className="mt-4 space-y-2">
                {Array.from({ length: rows }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 bg-gray-300 rounded ${
                      i % 2 === 0 ? "w-full" : "w-5/6"
                    }`}
                  ></div>
                ))}
              </div>
            )}

            {hasButtons && (
              <div className="mt-4 flex space-x-2">
                <div className="h-8 bg-gray-300 rounded w-20"></div>
                <div className="h-8 bg-gray-300 rounded w-20"></div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default Skeleton;
