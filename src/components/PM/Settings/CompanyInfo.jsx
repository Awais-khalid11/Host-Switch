import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

const CompanyInfo = () => {
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-[18px] font-bold md:mb-6 mb-3 text-[#181D27]">Company Profile</h4>
      </div>
      <div>
        <div className="flex gap-x-3 flex-wrap">
        <InputField
          label=" Company Name"
          id="name"
          name="name"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="StayPro Management"
        />
        <InputField
          label="Office Location"
          id="name"
          name="name"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="4517 Washington Ave. Manchester,"
        />
        <InputField
          label="Company Bio"
          id="text"
          name="text"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="“We help property owners maximize revenue”"
        />
        <InputField
          label="Company Type"
          id="text"
          name="text"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="Solo"
        />
      </div>
      <InputField
          label="Google Review Link"
          id="text"
          name="text"
          type="text"
          fieldName="w-full"
          placeholder="http://google,review.com"
        />
      <div className="flex justify-end">
        <Button variant=" defaultBtn" className="bg-[#4D72FF] text-white font-normal h-[44px] md:w-[195px] w-full">Update Company Info</Button>
      </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
