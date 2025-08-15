import React, { useState, useEffect } from "react";
import TrainerMessages from "./TrainerMessages";
import MessageBox from "./MessageBox";
import { MsgcrossSVG, MsgtickSVG } from "../../constants/Icons";
// import MessageBox from "./MessageBox";
// import TrainerMessages from "./TrainerMessages";

const Messages = () => {
  const [showBoxOnly, setShowBoxOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const userData = [
    {
      active: "active",
      name: "Emily Carter",
      time: "2 mins ago",
      msg: "I can’t find my course link.",
    },
    {
      name: "Jack Olson",
      time: "2 mins ago",
      msg: "Exam scheduled for Friday.",
    },
    {
      name: "Sophia Bell",
      time: "2 mins ago",
      msg: "I completed the licensing course!",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">Messages</h2>
        <div className="bg-[#F2F7F9] rounded-[12px] flex items-center gap-1.5 max-w-[411px] py-2 px-2">
          ✅
          <h4 className="text-sm font-normal text-[#000000]">
            You can send 2 intro messages without response
          </h4>
          <img src={MsgcrossSVG} alt="" />
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-[359px_1fr] gap-1">
        {!isMobile || !showBoxOnly ? (
          <TrainerMessages
            userData={userData}
            onSelectUser={() => isMobile && setShowBoxOnly(true)}
          />
        ) : null}

        {(!isMobile || showBoxOnly) && (
          <MessageBox onBack={() => setShowBoxOnly(false)} />
        )}
      </div>
    </div>
  );
};

export default Messages;
