import React from "react";

const PaySummary = () => {
  const infoData = [
    { title: "Amount Due:", text: " $2,800 USD" },
    { title: "Due Date:", text: "June 17, 2025" },
    { title: "Host Name:", text: " Sarah Williams" },
    { title: "Property Address:", text: " 482 Ocean View Blvd, San Diego, CA" },
    { title: "Host Email:", text: "sarah@example.com:" },
    { title: "Contract Type:", text: " Exclusive Full-Service" },
    {title: "Lead Source:", text: "HostSwitch Matching Platform" },
  ];
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 pt-4 mb-5">
      <h2 className="text-xl font-semibold mb-3.5">Payment Summary</h2>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        {infoData.map((item, index) => (
          <div key={index} className="text-sm font-inter flex md:flex-nowrap flex-wrap md:flex-row flex-col mb-3 md:mb-1.5">
            <div className="font-semibold w-[180px]">{item.title}</div>
            <div className="text-[#1B252B]">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaySummary;
