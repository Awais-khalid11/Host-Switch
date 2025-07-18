import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

const PlatformConfiguration = () => {
  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Platform Configuration</h2>
      <form>
        <div className="flex items-center gap-3 ">
          <InputField
            label="Platform Name"
            id="name"
            name="name"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="HOSTSWITCH"
          />
          <InputField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            fieldName="md:w-1/2 w-full"
            placeholder="hostswitch23@gamil.com"
          />
        </div>
        <div className="flex items-center gap-3 ">
          <InputField
            label="Time Zone"
            id="time"
            name="time"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="GMT (UTC+0) — UK Standard Time"
          />
          <InputField
            label="Platform Currency"
            id="price"
            name="price"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="£49.99"
          />
        </div>
        <InputField
          label="Commission % from PM"
          id="pm"
          name="pm"
          type="text"
          fieldName="w-full"
          placeholder="4% of first year’s projected revenue"
        />
        <div className="flex justify-end">
          <Button
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[44px] md:w-[152px] w-full"
          >
           Update 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlatformConfiguration;
