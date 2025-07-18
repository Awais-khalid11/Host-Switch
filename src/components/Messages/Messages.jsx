import React, { useState, useEffect } from "react";
import TrainerMessages from "./TrainerMessages";
import MessageBox from "./MessageBox";
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
      <h2 className="text-[32px] font-bold mb-5">Messages</h2>
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
