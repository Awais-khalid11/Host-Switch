import React from "react";
import BelliconNotification from "../BelliconNotification/BelliconNotification";
import {
  FindSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
} from "../../Constants/Icons";

const groupedNotifications = [
  {
    heading: "Proposals – updates related to PM proposals.",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "PM Sarah sent a new proposal for Villa Beach House.",
        description: "Review her proposal to proceed with next steps",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: KeyboardSVG,
        bgColor: "#04A9600D",
        title: "You accepted PM John’s proposal for Oceanview Apartment.",
        description: "We have notified John. Expect follow-up soon",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#04A9600D",
        title: "You rejected PM Lisa’s proposal for Lakeview Cottage.",
        description: "You can request new matches anytime",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NotimsgSVG,
        bgColor: "#04A9600D",
        title: "You Have a Proposal Waiting for Review",
        description:
          "Review PM Lisa’s proposal to move forward with your property management.",
        time: "2 min ago",
        isNew: true,
      },
    ],
  },
  {
    heading: "Messages – PM Chat Updates",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "You Have 2 New Messages",
        description:
          "PM Sarah sent you 2 new messages about your Villa Beach House",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "PM Alex Replied to Your Question",
        description:
          "Alex responded to your query about Beach House maintenance.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NoticrossSVG,
        bgColor: "#F2A5160D",
        title: "PM Lisa Shared Proposal Details",
        description:
          "Your payment of $250 is past due. Please clear it to continue services.",
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
        description: "Amount due: $350. Please complete payment by July 25",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Payment Received for Invoice #1229",
        description:
          "Your payment of $500 has been successfully processed. Thank you!",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Invoice #1240 is Overdue",
        description:
          "Your payment of $250 is past due. Please clear it to continue services.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
];

const HostIconNotification = () => {
  return (
    <div>
      <BelliconNotification
        tabs={["Unread", "all notifications"]}
        notificationData={groupedNotifications}
        filterOptions={[
          { label: "All" },
          { label: "Unread" },
          { label: "Proposals" },
          { label: "Messages" },
          { label: "Payments & Invoices" },
        ]}
      />
    </div>
  );
};

export default HostIconNotification;
