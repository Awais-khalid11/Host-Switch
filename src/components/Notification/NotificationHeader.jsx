import React, { useState } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import Button from "../Button/Button";
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from "../../constants/Icons";
import NotificationLists from "./NotificationLists";

import {
  FindSVG,
  GreenmsgSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
  TextmsgSVG,
} from "../../constants/Icons";

const groupedNotifications = [
  {
    heading: "Proposals – updates related to PM proposals.",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: 'PM Sarah sent a new proposal for "Villa Beach House."',
        description: "Review her proposal to proceed with next steps",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: KeyboardSVG,
        bgColor: "#1AB06F0D",
        title: 'You accepted PM John\'s proposal for "Oceanview Apartment."',
        description: "We have notified John. Expect follow-up soon",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#D92D200D",
        title: 'You rejected PM Lisa\'s proposal for "Lakeview Cottage."',
        description: "You can request new matches anytime",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "You Have a Proposal Waiting for Review",
        description: "Review PM Lisa's proposal to move forward",
        time: "2 min ago",
        isNew: true,
      },
    ],
  },
  {
    heading: "Messages – PM Chat Updates",
    items: [
      {
        img: GreenmsgSVG,
        bgColor: "#04A9600D",
        title: "You Have 2 New Messages",
        description: "PM Sarah sent you 2 new messages",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "PM Alex Replied to Your Question",
        description: "Alex responded to your query",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: TextmsgSVG,
        bgColor: "#04A9600D",
        title: "PM Lisa Shared Proposal Details",
        description: "Your payment of $250 is past due.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
  {
    heading: "Payments & Invoices",
    items: [
      {
        img: MoneySVG,
        bgColor: "#04A9600D",
        title: "Invoice #1234 is Ready for Payment",
        description: "Amount due: $350. Please complete by July 25",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Payment Received for Invoice #1229",
        description: "Your payment of $400 has been successfully processed.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Invoice #1240 is Overdue",
        description: "Your payment of $250 is past due.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
];

const NotificationHeader = () => {
  const [activeTab, setActiveTab] = useState("Unread");
  const [notifications, setNotifications] = useState(groupedNotifications);

  return (
    <>
        <div className="flex items-center justify-between mt-2.5 mb-5">
        <div className="flex items-center md:gap-5 gap-3">
          {/* Unread tab */}
          <div
            className={`flex items-center gap-1.5 uppercase cursor-pointer pb-2.5 ${
              activeTab === "Unread"
                ? "border-b-2 border-b-[#4D72FF]"
                : "text-[#77787C]"
            }`}
            onClick={() => setActiveTab("Unread")}
          >
            <h2
              className={`md:text-base text-[12px] font-bold flex items-center gap-1.5 ${
                activeTab === "Unread" ? "text-[#4D72FF]" : "text-[#77787C]"
              }`}
            >
              Unread
              <img src={TwoSVG} alt="unread" className="w-4 h-4" />
            </h2>
          </div>

          {/* All Notifications tab */}
          <h3
            className={`md:text-base text-[12px] font-bold uppercase cursor-pointer pb-2.5 ${
              activeTab === "All"
                ? "text-[#4D72FF] border-b-2 border-b-[#4D72FF]"
                : "text-[#77787C]"
            }`}
            onClick={() => setActiveTab("All")}
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

      <NotificationLists
        activeTab={activeTab}
        notifications={notifications}
      />
    </>
  );
};

export default NotificationHeader;
