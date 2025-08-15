import React from "react";
import Button from "../../Button/Button";
import ServiceName from "./ServiceName";

const Services = () => {
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-base font-bold mb-4 text-[#414651]">Services Offered</h4>
      </div>
      <div>
        <ServiceName/>
      <div className="flex justify-end">
        <Button variant=" defaultBtn" className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]">Update Profile</Button>
      </div>
      </div>
    </div>
  );
};

export default Services;
