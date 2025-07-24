import React, { useState } from "react";
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from "../../../Constants/Icons";
import Button from "../../Button/Button";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import AdminNotificationLists from "./AdminNotificationLists"; 

const AdminNotificationHeader = () => {
  const [activeTab, setActiveTab] = useState("unread");

  return (
    <>
      <div className="flex items-center justify-between mt-2.5 mb-5">
        <div className="flex items-center md:gap-5 gap-3">
          {/* Unread tab with icon */}
          <div
            className={`flex items-center gap-1.5 uppercase cursor-pointer pb-2.5 ${
              activeTab === "unread" ? "border-b-2 border-b-[#4D72FF]" : ""
            }`}
            onClick={() => setActiveTab("unread")}
          >
            <h2
              className={`md:text-base text-[12px] font-bold ${
                activeTab === "unread" ? "text-[#4D72FF]" : "text-[#77787C]"
              }`}
            >
              Unread
            </h2>
            {activeTab === "unread" && <img src={TwoSVG} alt="" className="w-4 h-4" />}
          </div>

          {/* All Notifications tab */}
          <h3
            className={`md:text-base text-[12px] font-bold uppercase cursor-pointer pb-2.5 ${
              activeTab === "all"
                ? "text-[#4D72FF] border-b-2 border-b-[#4D72FF]"
                : "text-[#77787C]"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Notifications
          </h3>
        </div>

        {/* Filter Dropdown */}
        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          options={[
            { label: "All" },
            { label: "Host Updates" },
            { label: "PM Updates" },
            { label: "Payments" },
            { label: "Feedback" },
          ]}
        />
      </div>

    <AdminNotificationLists activeTab={activeTab} />
    </>
  );
};

export default AdminNotificationHeader;
