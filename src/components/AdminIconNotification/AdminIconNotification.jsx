import React from "react";
import {
  FindSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
} from "../../Constants/Icons";
import BelliconNotification from "../BelliconNotification/BelliconNotification";

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
        img: KeyboardSVG,
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
        img: KeyboardSVG,
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

const AdminIconNotification = () => {
  return (
    <div>
      <BelliconNotification
        tabs={["Unread", "all notifications"]}
        notificationData={groupedNotifications}
        filterOptions={[
    { label: "All" },
    { label: "Host Updates" },
    { label: "PM Updates" },
    { label: "Payments" },
    { label: "Feedback" },
  ]}
      />
    </div>
  );
};

export default AdminIconNotification;
