import React from "react";
import { FaCircle } from "react-icons/fa";
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
    heading: "Proposals – Host Actions",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "Proposals – Host Actions",
        description: "Host Sarah requested a proposal for Villa Beach House. Create and send your proposal now.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: KeyboardSVG,
        bgColor: "#1AB06F0D",
        title: "Proposal Accepted",
        description: "Good news! Host James accepted your proposal for Oceanfront Villa.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NoticrossSVG,
        bgColor: "#D92D200D",
        title: "Proposal Rejected",
        description: "Host Emma decided not to proceed with your proposal for Pine Cabin.",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: NotimsgSVG,
        bgColor: "#F2A5160D",
        title: "Proposal Reminder",
        description: "You haven’t responded to Host Sarah’s proposal request yet. Act now.",
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
        description: "Sarah sent you a message regarding property availability.",
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
        description: "You have 3 unread messages from different hosts. Check now",
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
        description: "An invoice has been generated for Host Emma’s property hire",
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
        description: "Invoice #1245 is overdue. Please follow up with the admin",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
];

const PMNotificationLists = ({ activeTab }) => {
  const filteredNotifications =
    activeTab === "unread"
      ? groupedNotifications
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => item.isNew),
          }))
          .filter((group) => group.items.length > 0)
      : groupedNotifications;

      console.log("Filtered:", filteredNotifications);

  return (
    <div className="w-full mx-auto space-y-6">
      {filteredNotifications.map((group, i) => (
        <div key={i}>
          <h3 className="text-[#2F355466] text-sm font-bold mb-2">{group.heading}</h3>
          <div className="space-y-2">
            {group.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-[#F5FAFC] rounded-lg p-4"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-[42px] h-[42px] flex-[0_0_42px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <img src={item.img} alt="icon" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col-reverse items-end gap-1">
                  <span className="text-xs whitespace-nowrap text-gray-400">
                    {item.time}
                  </span>
                  {item.isNew && <FaCircle className="text-red-500 w-2 h-2" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PMNotificationLists;
