import React from "react";
import BelliconNotification from "../BelliconNotification/BelliconNotification";
import {
  FindSVG,
  GreenmsgSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
  TextmsgSVG,
} from "../../Constants/Icons";

const groupedNotifications = [
  {
    heading: "Proposals – Host Actions",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "Proposals – Host Actions",
        description:
          "Host Sarah requested a proposal for Villa Beach House. Create and send your proposal now.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: KeyboardSVG,
        bgColor: "#1AB06F0D",
        title: "Proposal Accepted",
        description:
          "Good news! Host James accepted your proposal for Oceanfront Villa.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#D92D200D",
        title: "Proposal Rejected",
        description:
          "Host Emma decided not to proceed with your proposal for Pine Cabin.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Proposal Reminder",
        description:
          "You haven’t responded to Host Sarah’s proposal request yet. Act now.",
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
        title: "New Message from Host Sarah",
        description:
          "Sarah sent you a message regarding property availability.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Host James Replied to Your Message",
        description: "James replied to your query about rental pricing",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: TextmsgSVG,
        bgColor: "#04A9600D",
        title: "Unread Message Reminder",
        description:
          "You have 3 unread messages from different hosts. Check now",
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
          "An invoice has been generated for Host Emma’s property hire",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Payment Received",
        description: "Your payment of $500 from Host James has been confirmed.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Invoice Overdue",
        description:
          "Invoice #1245 is overdue. Please follow up with the admin",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
];

const PMIconNotification = () => {
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
      ;
    </div>
  );
};

export default PMIconNotification;
