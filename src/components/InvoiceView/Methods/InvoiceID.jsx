import React from "react";
import { CalenderSVG, StatusSVG } from "../../../constants/Icons";

const InvoiceID = () => {
  return (
    <div className="flex w-full gap-5">
      <div className="border border-[#E4E5E8] rounded-[12px] p-5 md:w-1/2 w-full">
        <h3 className="text-xl font-bold">Invoice ID: INV-00345</h3>
        <h4 className="text-sm font-normal text-[#727272] mb-2.5">
          June 17, 2025
        </h4>
        <div>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-1.5">
            <img src={CalenderSVG} alt="img" />
            <span className="font-semibold"> Match Date:</span> June 14, 2025
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-bold">
            <img src={StatusSVG} alt="img" />
            Status:
            <span className="bg-[#CE1B1B1A] text-[12px] border-[#CE1B1B] font-normal text-[#CE1B1B] rounded-2xl px-2 py-0.5">
              Un Paid
            </span>
          </h3>
        </div>
      </div>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5 md:w-1/2 w-full">
        <h3 className="text-xl font-semibold">Payment Method:</h3>
        <h4 className="w-[100px] mx-auto pt-5 text-[#36363699] text-[17px] font-bold">Not yet paid</h4>
      </div>
    </div>
  );
};

export default InvoiceID;
