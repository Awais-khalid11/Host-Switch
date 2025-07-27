import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PdffilePNG, UserPNG } from "../../../constants/Imgs";
import { BackarrowSVG } from "../../../constants/Icons";
import { useNavigate } from "react-router-dom";
import MessageBox from "../../Host/Messages/MessageBox";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2.5 mb-5">
        <img src={BackarrowSVG} alt="img" onClick={() => navigate(-1)} className="cursor-pointer"/>
        <h2 className="lg:text-2xl md:text-xl text-sm font-bold">
          Chat with Your HostSwitch Concierge
        </h2>
      </div>
      <MessageBox/>
     </>
  )
};

export default LiveChat;
