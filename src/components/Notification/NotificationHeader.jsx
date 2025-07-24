import React, { useState } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import Button from "../Button/Button";
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from "../../constants/Icons";
import NotificationLists from "./NotificationLists";

const NotificationHeader = () => {
  const [activeTab, setActiveTab] = useState("unread");

  const isUnreadActive = activeTab === "unread";
  const isAllActive = activeTab === "all";

  return (
    <>
      <div className="flex items-center justify-between mt-2.5 mb-5">
        <div className="flex items-center md:gap-5 gap-2.5">
          {/* Unread Tab */}
          <div
            onClick={() => setActiveTab("unread")}
            className={`flex items-center gap-1.5 cursor-pointer pb-2.5 ${
              isUnreadActive ? "border-b-2 border-b-[#4D72FF]" : ""
            }`}
          >
            <h2
              className={`md:text-base text-[12px] font-bold uppercase ${
                isUnreadActive ? "text-[#4D72FF]" : "text-[#77787C]"
              }`}
            >
              Unread
            </h2>
            {isUnreadActive && <img src={TwoSVG} alt="" className="w-5 h-5" />}
          </div>

          {/* All Notifications Tab */}
          <h3
            onClick={() => setActiveTab("all")}
            className={`md:text-base text-[12px] font-bold uppercase cursor-pointer pb-2.5 ${
              isAllActive ? "text-[#4D72FF] border-b-2 border-b-[#4D72FF]" : "text-[#77787C]"
            }`}
          >
            All Notifications
          </h3>
        </div>

        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          options={[
            { label: "All" },
            { label: "Unread" },
            { label: "Proposals" },
            { label: "Messages" },
            { label: "Payments & Invoices" },
          ]}
        />
      </div>

      {/* Notification list based on selected tab */}
      <NotificationLists activeTab={activeTab} />
    </>
  );
};

export default NotificationHeader;
