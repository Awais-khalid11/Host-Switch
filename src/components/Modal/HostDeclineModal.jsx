import React from "react";
import Button from "../Button/Button";
import { DownloadSVG, EditSVG, WhitearrowSVG, WhiteeditSVG } from "../../constants/Icons";

const HostDeclineModal = ({ setClose }) => {
  return (
    <div>
      <div className="border border-[#FFFFFF1A] rounded-[8px] mb-2.5 px-4 pt-5 pb-8 text-white text-sm">
        <p>
          Hi there! I’m interested in your property management services and
          would love to review your proposal. Looking forward to connecting!
        </p>
      </div>

      <div className="flex items-center gap-1 mb-5">
        <img src={WhiteeditSVG} alt="" />
        <h4 className="text-[12px] font-bold text-white">Custom Message</h4>
      </div>

      <div className="flex items-center justify-center md:flex-nowrap flex-wrap gap-2.5 md:mb-0 mb-3.5">
        <Button
          variant="defaultBtn"
          className="border border-white px-6 py-4 !w-[250px] h-[48px]"
          onClick={setClose} // Close modal on Cancel
        >
          Cancel
        </Button>
        <Button variant="whitebtn" className="px-6 py-4 !w-[250px]">
          Send Request & Message
        </Button>
      </div>
    </div>
  );
};


export default HostDeclineModal;
