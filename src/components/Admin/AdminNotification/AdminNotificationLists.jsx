import React from "react";
import { FaCircle } from "react-icons/fa";
import { FindSVG, 
  GreenmsgSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
  TextmsgSVG,} from "../../../Constants/Icons";


const groupedNotifications = [
  {
    heading: "Host Activities",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: 'New Host Signup',
        description: "Host Sarah has created an account and is ready for onboarding",
        time: "2 min ago",
        isNew: true,
      },
      {
        img: KeyboardSVG,
        bgColor: "#1AB06F0D",
        title: 'Host Sarah has created an account and is ready for onboarding',
        description: "Host James requested a refresh of PM matches",
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
        title: "Host Declined All PMs",
        description: "Host David declined all matched PMs for Lakeview Cottage.",
        time: "2 min ago",
        isNew: true,
      },
    ],
  },
  {
    heading: "Host Activities",
    items: [
      {
        img: FindSVG,
        bgColor: "#E8F5FA",
        title: "New Host Signup",
        description: "Host Sarah has created an account and is ready for onboarding",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Host Requested New Matches",
        description: "Host James requested a refresh of PM matches",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NoticrossSVG,
        bgColor: "#04A9600D",
        title: "Host Declined All PMs",
        description: "Host David declined all matched PMs for Lakeview Cottage.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: NoticrossSVG,
        bgColor: "#04A9600D",
        title: "Host Hired a PM",
        description: "Host Emma hired PM Alex for Oceanfront Villa. An invoice was generated.",
        time: "2 min ago",
        isNew: false,
      },
    ],
  },
  {
    heading: "PM Activities",
    items: [
      {
        // img: MoneySVG,
        // bgColor: "#04A9600D",
         img: FindSVG,
        bgColor: "#E8F5FA",
        title: "New PM Signup",
        description: "PM Company 'Elite Rentals' has joined and is ready for verification",
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
        description: "PM Sarah declined Host Emma’s property lead. Reason: Property location outside service area",
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
        description: "Invoice #1234 was generated for PM Elite Rentals – $350 due.",
        time: "2 min ago",
        isNew: false,
      },
      {
        img: SkymsgSVG,
        bgColor: "#04A9600D",
        title: "Payment Received",
        description: "Payment of $500 received from PM John for Host Emma’s hire.",
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
      }
    ],
  },
];

const AdminNotificationLists = () => {
  return (
    <div className="w-full mx-auto  space-y-6">
      {groupedNotifications.map((group, i) => (
        <div key={i}>
          <h3 className="text-[#2F355466] text-sm font-bold mb-2">
            {group.heading}
          </h3>
          <div className="space-y-2">
            {group.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start bg-[#F5FAFC] rounded-lg p-4"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
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
                  <span className="text-xs text-gray-400">{item.time}</span>
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

export default AdminNotificationLists;
