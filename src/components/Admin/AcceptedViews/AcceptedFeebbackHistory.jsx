import React from "react";
import { StarSVG } from "../../../constants/Icons";

const AcceptedFeebbackHistory = () => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">Feedback History</h3>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5 ">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-bold w-[150px]">Host Feedback: </h3>
          <h5 className="text-sm font-normal text-black">
            “Poor communication, local presence, and Slow Performance”{" "}
          </h5>
        </div>
        <div className="flex items-center ">
          <h3 className="text-sm font-bold w-[150px]">Rating:</h3>
          <div className="text-sm font-normal flex items-center gap-1">4.7/5</div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedFeebbackHistory;
