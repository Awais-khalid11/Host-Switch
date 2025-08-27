import React, { useState } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import Button from "../Button/Button";
import { FilterSVG, TwoSVG } from "../../constants/Icons";
import NotificationLists from "./NotificationLists";

const BelliconNotification = ({
  tabs = ["Unread", "All"],
  notificationData,
  filterOptions = [],
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div className="flex items-center justify-between mt-2.5 mb-5">
        {/* Tabs */}
        <div className="flex items-center md:gap-5 gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 uppercase cursor-pointer pb-2.5 ${
                activeTab === tab
                  ? "border-b-2 border-b-[#4D72FF]"
                  : "text-[#77787C]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <h2
                className={`md:text-base text-[12px] font-bold flex items-center gap-1.5 ${
                  activeTab === tab ? "text-[#4D72FF]" : "text-[#77787C]"
                }`}
              >
                {tab}
                {tab === "Unread" && activeTab === "Unread" && (
                  <img src={TwoSVG} alt="unread-icon" className="w-4 h-4" />
                )}
              </h2>
            </div>
          ))}
        </div>

        {/* Filter */}
        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          options={filterOptions}
        />
      </div>

      {/* Notification List */}
      <NotificationLists
        activeTab={activeTab}
        notifications={notificationData}
      />
    </>
  );
};

export default BelliconNotification;
