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

      <div className="flex gap-5 mb-3 p-1 w-[700px] lg:w-full overflow-auto">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "black" : ""}
            className={` text-base rounded-[10px] transition-all ${
              selectedTab === tab
                ? "font-bold bg-[#EDEDED] py-3 "
                : "font-normal !px-0"
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

export default AdminSettings;
