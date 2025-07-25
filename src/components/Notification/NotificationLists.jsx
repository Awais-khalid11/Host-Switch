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

 const NotificationLists = ({ activeTab, notifications }) => {
   const filteredNotifications =
      notifications
        ?.map((group) => ({
          ...group,
          items:
            activeTab === "unread"
              ? group.items.filter((item) => item.isNew)
              : group.items,
        }))
        .filter((group) => group.items.length > 0) || [];
  
    return (
      <div className="w-full mx-auto space-y-6">
        {filteredNotifications.map((group, i) => (
          <div key={i}>
            <h3 className="text-[#2F355466] text-sm font-bold mb-2">
              {group.heading}
            </h3>
            <div className="space-y-2">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-[#F5FAFC] rounded-lg md:p-4 p-3"
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


export default NotificationLists;
