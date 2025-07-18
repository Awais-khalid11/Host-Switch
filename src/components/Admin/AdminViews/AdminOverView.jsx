import React from "react";

const AdminOverView = () => {
  const infoData = [
    { title: "Date Sent:", text: "June 10, 2025" },
    { title: "Declined On:", text: "June 10, 2025" },
    { title: "Financial Projection:", text: "$5,200/month" },
    { title: "Included Services", text: "Listing Optimization, Smart Lock Mgmt, Noise Monitoring, Maintenance Coordination" },
    { title: "Attachments:", text: "Proposal PDF, Financial Model Sheet" },
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full mb-5">
        <h2 className="text-xl font-semibold mb-6">Proposal Overview</h2>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        {infoData.map((item, index) => (
        <div key={index} className="text-sm font-inter flex md:flex-nowrap flex-wrap mb-1.5">
          <div className="font-semibold w-[180px]">{item.title}</div>
          <div className="text-[#1B252B] whitespace-nowrap">{item.text}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AdminOverView;
