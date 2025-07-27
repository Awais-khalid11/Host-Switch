import React, { useState } from "react";
import ConciergeFaqs from "./ConciergeFaqs";
import Button from "../../Button/Button";
import { ChatSVG } from "../../../constants/Icons";
import LiveChat from "./LiveChat";

const ConciergeSupport = () => {
  const [liveChat, setLiveChat] = useState(false);

  return liveChat ? (
    <LiveChat />
  ) : (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="md:text-2xl text-base font-bold text-[#1f2123]">Help & Support</h2>
        <Button
          variant="defaultBtn"
          className="!h-[48px]"
          prefixImg={ChatSVG}
          onClick={() => setLiveChat(true)}
        >
          Start Live Chat
        </Button>
      </div>
      <div className="border border-[#2525251A] p-5 rounded-[20px] mb-3">
        <h3 className="text-xl font-bold mb-5">Need Help Choosing the Right Property Manager?</h3>
        <div className="text-lg font-normal text-[#181D27] pl-5">
          <p>
            Our HostSwitch Concierge team is here to answer your questions,
            explain proposals, and help you find the perfect fit. Reach out
            anytime – we’re real people, not bots.
          </p>
        </div>
      </div>
      <ConciergeFaqs />
    </div>
  );
};

export default ConciergeSupport;
