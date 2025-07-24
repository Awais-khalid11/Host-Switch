import React from "react";
import {
  BuildingSVG,
  BuildSVG,
  EditSVG,
  LinkSVG,
  PropertySVG,
  StatusSVG,
} from "../../../constants/Icons";
import Button from "../../Button/Button";

const PropertySummary = () => {
  return (
    <div className="border border-[#2525251A] p-5 rounded-[20px] ">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-[#181D27]">
        Property Summary
      </h2>
      <Button
        variant="borderbtn"
        className="border-[#555555] text-[#555555] max-w-[180px]"
        prefixImg={EditSVG}
      >
        Edit Property Info
      </Button>
      </div>
      <div className="border border-[#2525251A] p-5 rounded-[20px]">
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center mb-2.5 border-b border-b-[#2525251A] pb-4">
          <h5 className="text-base font-semibold flex items-center gap-1.5 md:m-0 mb-1.5">
            <img src={PropertySVG} alt="" />
            Property address:
          </h5>
          <h6 className="text-base font-normal">
            123 Palm Grove Ave, Miami, FL 33139
          </h6>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center border-b border-b-[#2525251A] pb-4 mb-2.5">
          <h5 className="text-base font-semibold flex items-center gap-1.5 md:m-0 mb-1.5">
            <img src={LinkSVG} alt="" />
            Airbnb/Vrbo Link:
          </h5>
          <h6 className="text-base font-normal text-[#0050B3]">
            View Listing on Airbnb
          </h6>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center mb-2.5 border-b border-b-[#2525251A] pb-4">
          <h5 className="text-base font-semibold flex items-center gap-1.5 md:m-0 mb-1.5">
            <img src={BuildingSVG} alt="" />
            Current PM Company:
          </h5>
          <h6 className="text-base font-normal">Current PM Company:</h6>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center">
          <h5 className="text-base font-semibold flex items-center gap-1.5 md:m-0 mb-1.5">
            <img src={StatusSVG} alt="" />
            Status:{" "}
          </h5>
          <h6 className="text-base font-normal border border-[#17642F] text-[#17642F] bg-[#D8F2D9] rounded-[90px] w-[60px] h-[27px] text-center">
            Active
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PropertySummary;
