import React from "react";

const Info = () => {
  const infoData = [
    { title: "Property Address:", text: "Hidden Until Proposal Accepted" },
    { title: "Property Type:", text: "Single-Family Home" },
    { title: "Bedrooms / Baths:", text: "3 Bed / 2 Bath" },
    { title: "Rental Frequency:", text: "Full-Time STR" },
    { title: "Condition:", text: "Good – Well-maintained, modern interior" },
    { title: "Willing to Upgrade:", text: "Yes – open to suggestions" },
    { title: "Past PM Issues:", text: "Poor communication, lack of transparency" },
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <div>
        {infoData.map((item, index) => (
        <div key={index} className="text-sm font-inter flex md:flex-nowrap flex-wrap mb-1">
          <div className="font-semibold w-[160px]">{item.title}</div>
          <div className="text-[#1B252B] whitespace-nowrap">{item.text}</div>
        </div>
      ))}
      </div>
      <div className="text-sm font-inter flex md:flex-nowrap flex-wrap">
        <div className="font-semibold w-[160px]">Listing Link (Airbnb):</div>
        <div className="text-[#005BE0] underline cursor-pointer">
          Hidden until proposal is accepted
        </div>
      </div>
    </div>
  );
};

export default Info;
