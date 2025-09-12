import React from "react";
import OperationService from "./OperationService";
import Overview from "../Overview";
import NoDataFound from "../../../NoDataFound";

const Operations = ({ operationsData }) => {
  if (!operationsData) {
    return <NoDataFound message="No Operations Information" />;
  }

  const operations = operationsData.operation_services;

  const operationsInfo = [
    {
      title: "Cleaning Partner:",
      text: operations.cleaning_partner?.join(", ") || "N/A",
    },
    {
      title: "Avg Turnover Time:",
      text: operations.avg_turnover_time
        ? `${operations.avg_turnover_time} hours`
        : "N/A",
    },
    {
      title: "Provides Linens & Consumables:",
      text: operations.linens_consumables ? "Yes" : "No",
    },
    {
      title: "Guest Response Time (Avg):",
      text: operations.guest_response_time
        ? `${operations.guest_response_time} hours`
        : "N/A",
    },
    {
      title: "Maintenance Response Time:",
      text: operations.maintenance_response_time
        ? `${operations.maintenance_response_time} hours`
        : "N/A",
    },
    {
      title: "Smart Lock Tech:",
      text: operations.smart_lock_tech ? "Yes" : "No",
    },
  ];

  const videoUrl = operations.video
    ? `${import.meta.env.VITE_IMG_URL}${operations.video}`
    : null;

  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5">
      <div className="md:w-1/2 w-full">
        <OperationService scopeService={operations.scope_service} />
        <Overview companyData={operationsInfo} />
      </div>
      <div className="md:w-1/2 w-full">
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-5">Introduction Video</h3>
          {videoUrl ? (
            <video
              controls
              className="rounded-[12px] min-w-[422px] w-full object-cover min-h-[451px]"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="rounded-[12px] min-w-[422px] w-full min-h-[451px] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No video available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Operations;
