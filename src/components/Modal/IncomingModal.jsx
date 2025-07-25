import React from "react";
import { useNavigate } from "react-router-dom";
import { WhiteeditSVG } from "../../constants/Icons";
import Button from "../Button/Button";

const IncomingModal = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate("/pm/messages")}
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
          onClick={() => navigate("/pm/messages")}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default IncomingModal;
