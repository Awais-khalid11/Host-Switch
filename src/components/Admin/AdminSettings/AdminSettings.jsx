import React, { useState } from "react";
import Button from "../../Button/Button";
import PlatformConfiguration from "./PlatformConfiguration";
import VerificationSettings from "./VerificationSettings";
import InvoicePaymentSettings from "./InvoicePaymentSettings";
import NotificationsAlerts from "./NotificationsAlerts";
import FeedbackSettings from "./FeedbackSettings";

const AdminSettings = () => {
  const [selectedTab, setSelectedTab] = useState("Platform Configuration");

  const tabs = [
    "Platform Configuration",
    "Verification Settings",
    "Invoice & Payment Settings",
    "Notifications & Alerts",
    "Feedback Settings",
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Platform Configuration":
        return <PlatformConfiguration />;
      case "Verification Settings":
        return <VerificationSettings />;
      case "Invoice & Payment Settings":
        return <InvoicePaymentSettings />;
      case "Notifications & Alerts":
        return <NotificationsAlerts />;
      case "Feedback Settings":
        return <FeedbackSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-2">Settings</h2>

      <div className="flex mb-3 p-1 w-[350px] md:w-[700px] lg:w-full overflow-auto">
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`text-base font-normal !px-2.5 py-3 rounded-[10px] min-w-max transition-all duration-300
         ${
           selectedTab === tab
             ? "bg-[#EDEDED] font-semibold"
             : "bg-white text-black"
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

export default AdminSettings;
