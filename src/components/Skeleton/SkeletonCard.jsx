import React from "react";

const Skeleton = ({
  count = 3,
  variant = "card",
  rows = 3,
  hasImage = false,
  hasButtons = false,
  className = "",
  gridCols = 4,
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

      case "chat":
        return (
          <div className="space-y-4">
            {Array.from({ length: rows }).map((_, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl bg-gray-300 ${
                    i % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"
                  }`}
                >
                  <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        );

      case "dashboard-cards":
        return (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-4`}
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-200 rounded-xl flex-shrink-0"></div>

                <div className="flex-1 min-w-0">
                  <div className="h-3 bg-gray-300 rounded w-20 mb-2"></div>

                  <div className="h-6 bg-gray-400 rounded w-8"></div>
                </div>
              </div>
            ))}
          </div>
        );

      case "host-leads":
        return (
          <div className="flex w-full flex-wrap gap-4">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-xl md:max-w-[32%] w-full p-4"
              >
                <div className="flex items-center justify-between border-b border-b-[#25252526] pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[46px] h-[46px] bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <div className="h-3 bg-gray-300 rounded w-16 mb-1"></div>
                    <div className="h-6 bg-green-200 rounded-full w-16"></div>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-12"></div>
                  </div>

                  <div className="flex justify-between mb-5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        );
      case "host-owner":
        return (
          <div className="flex w-full flex-wrap gap-4">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-xl md:max-w-[32%] w-full p-4 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[46px] h-[46px] bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-gray-300 rounded w-32 mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-48"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-32"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>

                <div>
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
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

  if (variant === "dashboard-cards") {
    return (
      <div className={`animate-pulse ${className}`}>{renderSkeleton()}</div>
    );
  }

  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default Skeleton;
