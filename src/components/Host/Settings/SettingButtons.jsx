import React, { useState } from "react";
import Security from "./Security";
import Notification from "./Notification";
import ProfileInfo from "./ProfileInfo";
import Button from "../../Button/Button";

const SettingButtons = () => {
  const [selectedTab, setSelectedTab] = useState("Profile Info");

  const tabs = [
    "Profile Info",
    "Security",
    "Notifications",
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Profile Info":
        return <ProfileInfo />;
      case "Security":
        return <Security />;
      case "Notifications":
        return <Notification />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-2">Settings</h2>

     
      <div className="flex mb-3 p-1 w-[350px] lg:w-full overflow-auto">
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`text-base font-medium px-5 py-3 rounded-[10px] min-w-max transition-all duration-300
    ${
      selectedTab === tab ? "bg-[#EDEDED] font-semibold" : "bg-white text-black"
    }
  `}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div>{renderTabContent()}</div>
    </div>
  );
};

export default SettingButtons;
