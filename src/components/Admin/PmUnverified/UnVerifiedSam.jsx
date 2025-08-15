import React from "react";
import { UserPNG } from "../../../constants/Imgs";
import { AccepthostSVG, CalenderSVG, CallSVG, LocationSVG, Send2SVG, SmsSVG, StatusSVG } from "../../../constants/Icons";
import SemiCircleProgress from "../../Host/MatchScore";

const UnVerifiedSam = () => {
  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5">
     <div className="md:w-[60%] w-full">
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
      <div className="max-w-[639px] md:flex-nowrap flex-wrap flex justify-between md:flex-row flex-col">
        <div className="md:mb-0 mb-2.5">
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
            <img src={Send2SVG} alt="img" />
            <span className="font-semibold">Proposal sent:</span>   -
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={AccepthostSVG} alt="img" />
            <span className="font-semibold">Accepted by Hosts: </span>   -
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-bold mb-2.5">
            <img src={StatusSVG} alt="img" />
            Status:
            <span className="bg-[#CE1B1B1A] font-normal text-[#CE1B1B] border border-[#CE1B1B] rounded-2xl px-2 py-0.5">
              UnVerified 
            </span>
          </h3>
        </div>
      </div>
     </div>
    </div>
  );
};

export default UnVerifiedSam;
