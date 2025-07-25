import React, { useState } from "react";
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from "../../../Constants/Icons";
import Button from "../../Button/Button";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import AdminNotificationLists from "./AdminNotificationLists";
import {
  FindSVG,
  GreenmsgSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
  TextmsgSVG,
} from "../../../Constants/Icons";

const groupedNotifications = [
  {
    heading: "Host Activities",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "New Host Signup",
        description:
          "Host Sarah has created an account and is ready for onboarding",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Host Requested New Matches",
        description: "Host James requested a refresh of PM matches",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#04A9600D",
        title: "Host Declined All PMs",
        description:
          "Host David declined all matched PMs for Lakeview Cottage.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#04A9600D",
        title: "Host Hired a PM",
        description:
          "Host Emma hired PM Alex for Oceanfront Villa. An invoice was generated.",
        time: "2 min ago",
        isNew: true,
      },
    ],
  },
  {
    heading: "PM Activities",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "New PM Signup",
        description:
          "PM Company 'Elite Rentals' has joined and is ready for verification",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "New Proposal Sent by PM",
        description: "PM John sent a proposal for Villa Beach House.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NoticrossSVG,
        bgColor: "#F2A5160D",
        title: "PM Declined a Host Lead",
        description:
          "PM Sarah declined Host Emma’s property lead. Reason: Property location outside service area",
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
        title: "Invoice Generated",
        description:
          "Invoice #1234 was generated for PM Elite Rentals – $350 due.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Payment Received",
        description:
          "Payment of $500 received from PM John for Host Emma’s hire.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Invoice Overdue",
        description: "Invoice #1245 is overdue. Follow-up required.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
  {
    heading: "Feedback & Reports",
    items: [
      {
        img: MoneySVG,
        bgColor: "#04A9600D",
        title: "Host Feedback Received",
        description: "Host Emma rated PM Lisa’s proposal 4/5 stars",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "PM Feedback Collected",
        description: "PM Alex submitted post-hire feedback for Host Sarah.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
];

const AdminNotificationHeader = () => {
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

      <AdminNotificationLists
        activeTab={activeTab}
        notifications={notifications}
      />
    </>
  );
};

export default AdminNotificationHeader;
