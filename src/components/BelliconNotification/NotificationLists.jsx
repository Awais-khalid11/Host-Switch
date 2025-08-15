import React from "react";
import { FaCircle } from "react-icons/fa";

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
          <h3 className="text-[#2F355466] text-base font-bold mb-2">
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
                    <p className="font-semibold text-[#181D27] text-base">
                      {item.title}
                    </p>
                    <p className="text-[#181D27] text-sm">{item.description}</p>
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
