import React from "react";
import { UserPNG } from "../../../constants/Imgs";
import { SmsSVG, CalenderSVG,
  CallSVG,
  LocationSVG,
  StatusSVG, } from "../../../constants/Icons";

const AcceptSam = () => {
  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5">
      <div className="flex items-center gap-2 mb-5">
        <img
          src={UserPNG}
          alt="img"
          className="rounded-full h-[58px] w-[58px]"
        />
        <div>
          <h4 className="text-xl font-bold">Sam S.</h4>
          <h5 className="font-normal text-sm text-[#727272]">Property Owner</h5>
        </div>
      </div>
      <div className="max-w-[639px] md:flex-nowrap flex-wrap flex justify-between">
        <div>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={SmsSVG} alt="img" />
            sarah.t@email.com
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={CallSVG} alt="img" />
            11 033 456 889
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-normal">
            <img src={LocationSVG} alt="img" />
            123 Palm Ave, Miami
          </h3>
        </div>
        <div>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={CalenderSVG} alt="img" />
            <span className="font-semibold">Decision Date:</span> June 14, 2025
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={CalenderSVG} alt="img" />
            <span className="font-semibold">Subscription:</span> Active
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-bold mb-2.5">
            <img src={StatusSVG} alt="img" />
            Status:
            <span className="bg-[#1A932E1A] font-normal text-[#1A932E] border border-[#1A932E] rounded-2xl px-2 py-0.5">
             Accepted  
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AcceptSam;
