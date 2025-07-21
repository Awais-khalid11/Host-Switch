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

     a

      <div>{renderTabContent()}</div>
    </div>
  );
};

export default SettingButtons;
