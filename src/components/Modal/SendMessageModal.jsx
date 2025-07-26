import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { WhiteeditSVG } from "../../constants/Icons";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/Routes";

const SendMessageModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if it's host or PM based on the current path
  const isHost = location.pathname.includes("/host");
  const messageRoute = isHost ? ROUTES.HOSTMESSAGES : ROUTES.MESSAGES;

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
        <Link
          className="text-sm font-bold text-white cursor-pointer"
          to={messageRoute}
        >
          Custom Messages
        </Link>
      </div>

      <div className="flex items-center gap-2.5">
        <Button
          variant="borderBtn"
          className="w-[250px] h-[54px] border-white text-white border"
        >
          Cancel
        </Button>
        <Link
          variant="borderBtn"
          className="w-[250px] rounded-[8px] flex items-center justify-center font-bold h-[54px] bg-white text-black border-white border"
          to={messageRoute}
        >
          Send Message
        </Link>
      </div>
    </div>
  );
};

export default SendMessageModal;
