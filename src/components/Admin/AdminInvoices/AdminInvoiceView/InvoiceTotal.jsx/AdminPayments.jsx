import React, {useState} from "react";


const AdminPayments = () => {
 const sections = [
  {
    title: "Host Details",
    data: [
      { label: "Host Name:", value: "Sarah Williams" },
      { label: "Host Email:", value: "sarah@example.com" },
      { label: "Property Address:", value: "482 Ocean View Blvd, San Diego, CA" },
      { label: "Proposal Accepted On:", value: "June 17, 2025" },
      { label: "PM Commission Fee (4%):", value: "$1,200" },
    ],
  },
  {
    title: "PM Company Details",
    data: [
      { label: "PM Company Name:", value: "LuxeStay Rentals" },
      { label: "Email:", value: "adam@luxestay.com" },
      { label: "Phone:", value: "+1-123-456-7890" },
      { label: "Host Matched Date:", value: "June 8, 2025" },
      { label: "Proposal Accepted:", value: "June 10, 2025" },
    ],
  },
];


  return (
  <div className="flex gap-5 ">
    {sections.map((section, index) => (
      <div key={index} className="w-1/2">
        <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
        <div className="border border-[#E4E5E8] rounded-[12px] p-5">
          {section.data.map((item, i) => (
            <div key={i} className="text-sm font-inter flex mb-1.5">
              <div className="font-semibold w-[180px]">{item.label}</div>
              <div className="text-[#1B252B]">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

};


export default AdminPayments;
