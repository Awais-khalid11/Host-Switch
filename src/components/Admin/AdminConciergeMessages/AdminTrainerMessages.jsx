import React, { useState } from "react";
import { UserPNG } from "../../../constants/Imgs";


const AdminTrainerMessages = ({ onSelectUser }) => {
  const recentMessages = [
    {
      img: UserPNG,
      title: "Alex Stewart",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Cameron Williamson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Jerome Bell",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Savannah Nguyen",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Annette Black",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
  ];

  return (
    
    <div className="bg-white border border-[#F5F5F5] py-2 rounded-xl h-[510px] overflow-y-auto w-full">
      <h2 className="font-semibold text-xl mb-4 px-4">Inbox</h2>
      <div>
        {recentMessages.map((msg, index) => (
          <div
            key={index}
            onClick={onSelectUser}
            className="cursor-pointer px-4 py-3 flex justify-between items-start hover:bg-[#F5F5F5]"
          >
            <div className="flex gap-3">
              <img
                src={msg.img}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold">{msg.title}</p>
                <p className="text-gray-600 truncate max-w-[200px]">
                  {msg.desc}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs text-gray-500">
              <span>{msg.time}</span>
              {msg.msgCount && (
                <span className="bg-[#D92D20] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {msg.msgCount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTrainerMessages;
