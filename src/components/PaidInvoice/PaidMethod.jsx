import React from "react";
import { DotbtnSVG, PdfSVG, StripeSVG } from "../../constants/Icons";
import Button from "../Button/Button";

const PaidMethod = () => {
  const infoData = [
    { title: "Host Name:", text: " Sarah Williams" },
    { title: "Host Email:", text: "sarah@example.com:" },
    { title: "Property Address:", text: "482 Ocean View Blvd, San Diego, CA" },
    { title: "Proposal Accepted On:", text: "June 17, 2025" },
    { title: "Annual Projection:", text: " $70,000" },
    { title: "PM Commission Fee (4%):", text: "$2,800" },
    {
      title: "Contract Type:",
      text: " Exclusive Full-Service",
    },
    {
      title: "Lead Source:",
      text: "HostSwitch Matching Platform",
    },
  ];
  return (
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        <h2 className="text-xl font-semibold mb-5">Amount paid: $2,800 USD</h2>
        <div className="flex gap-5">
          <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-1/2">
            {infoData.map((item, index) => (
              <div key={index} className="text-sm font-inter flex mb-1.5">
                <div className="font-semibold w-[180px]">{item.title}</div>
                <div className="text-[#1B252B]">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-1/2">
            <h2 className="text-xl font-semibold mb-5">
              Payment Method:
            </h2>
            <div className="border border-[#E4E5E8] rounded-[12px] py-3 px-4 flex justify-between items-center mb-4">
              <img src={StripeSVG} alt="img" className="w-[72px] h-[48px]" />
              <img src={DotbtnSVG} alt="img" className="w-4 h-4" />
            </div>
            
            <Button variant="defaultBtn" className="w-full" prefixImg={PdfSVG}>
              Download Receipt PDF
            </Button>
          </div>
        </div>
      </div>
  );
};

export default PaidMethod;
