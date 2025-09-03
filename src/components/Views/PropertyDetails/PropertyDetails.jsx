import React from "react";
import Info from "./Info";
import PropertyImgs from "./PropertyImgs";

const PropertyDetails = ({ data }) => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full mb-5">
      <h3 className="font-semibold text-xl mb-6">Property Details</h3>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <Info data={data} />
        <PropertyImgs data={data} />
      </div>
    </div>
  );
};

export default PropertyDetails;
