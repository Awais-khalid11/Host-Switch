import React from "react";
import SwitchBtn from "../../SwitchBtn/SwitchBtn";

const VerificationSettings = () => {
  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Verification Settings</h2>
      <div className="flex md:flex-nowrap flex-wrap gap-3">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Host Verification Required</p>
          <SwitchBtn />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>PM Verification Required</p>
          <SwitchBtn />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm  w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
        <p>Auto-verify if form complete</p>
        <SwitchBtn />
      </div>
    </div>
  );
};

export default VerificationSettings;
