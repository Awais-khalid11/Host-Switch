import React, { useState } from "react";
import Security from "./Security";
import Notification from "./Notification";
import ProfileInfo from "./ProfileInfo";
import Media from "./Media";
import CompanyInfo from "./CompanyInfo";
import Services from "./Services";
import Button from "../../Button/Button";

const SettingButtons = () => {
  const [selectedTab, setSelectedTab] = useState("Company Profile");

  const tabs = [
    "Company Profile",
    "Profile Info",
    "Services Offered",
    "Media & Branding",
    "Security",
    "Notifications",
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Company Profile":
        return <CompanyInfo />;
      case "Profile Info":
        return <ProfileInfo />;
      case "Services Offered":
        return <Services />;
      case "Media & Branding":
        return <Media />;
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

      <div className="flex mb-3 p-1 w-[700px] lg:w-full overflow-auto">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "black" : ""}
            className={` text-base rounded-[10px] transition-all ${
              selectedTab === tab
                ? "font-bold bg-[#EDEDED] py-3 px-5"
                : "font-normal px-0"
            }`}
            onClick={() => setSelectedTab(tab)}
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
