import React from "react";
import { TableiconSVG } from "../../../constants/Icons";
import { UserPNG } from "../../../constants/Imgs";

const recent = [
  {
    userImg: UserPNG,
    title: "James Benny",
    desc: "Hey, Let me know if you’re still available...",
  },
  {
    userImg: UserPNG,
    title: "William Chynita",
    desc: "Okay thanks",
  },
  {
    userImg: UserPNG,
    title: "Henry David",
    desc: "Okay thanks",
  },
  {
    userImg: UserPNG,
    title: "Charlotte Flair",
    desc: "Sounds good buddy",
  },
];

const DashboardMessages = () => {
  return (
    <div className="border border-[#001B4429] p-4 rounded-[12px] h-[323px]">
      <div className="flex justify-between items-center lg:mb-6 mb-2">
        <h3 className="text-xl font-semibold text-[#181818]">
          Recent Messages
        </h3>
        <img src={TableiconSVG} alt="" />
      </div>
      {recent.map((item, index) => (
        <div key={index} className="flex items-center gap-4 last-of-type:mb-0 mb-5">
          <img src={item.userImg} alt="" className="h-10 w-10 rounded-full" />
          <div>
            <h4 className="text-[14px] font-normal text-[#181818] ">
              <i>{item.title}</i>
            </h4>
            <h5 className="text-[12px] font-normal text-[#7F7F7F]">
              {item.desc}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMessages;
