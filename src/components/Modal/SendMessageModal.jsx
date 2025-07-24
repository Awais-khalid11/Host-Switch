import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WhiteeditSVG } from "../../constants/Icons";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/Routes";

const SendMessageModal = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPm = location.pathname.includes("/pm");
  const targetRoute = isPm ? ROUTES.MESSAGES : ROUTES.HOSTMESSAGES;

  const handleSendMessage = () => {
    if (userType === "pm") {
      navigate(ROUTES.MESSAGES);
    } else {
      navigate(ROUTES.HOSTMESSAGES);
    }
  };

  return (
    <div>
      <div className="border border-[#FFFFFF1A] bg-[#FFFFFF1A] text-white p-4 rounded-[8px] mb-1.5">
        <p>
          Hi, I’d love to connect and share how I can support your property.
          Feel free to view my profile and reach out with any questions.
        </p>
      </div>

      <div className="flex items-center gap-2.5 mb-2.5">
        <img src={WhiteeditSVG} alt="" />
        <h4
          className="text-sm font-bold text-white cursor-pointer"
          onClick={() => navigate(targetRoute)}
        >
          Custom Messages
        </h4>
      </div>

      <div className="flex items-center gap-2.5">
        <Button
          variant="borderBtn"
          className="w-[250px] h-[54px] border-white text-white border"
        >
          Cancel
        </Button>
        <Button
          variant="borderBtn"
          className="w-[250px] h-[54px] bg-white text-black border-white border"
          onClick={handleSendMessage}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default SendMessageModal;
