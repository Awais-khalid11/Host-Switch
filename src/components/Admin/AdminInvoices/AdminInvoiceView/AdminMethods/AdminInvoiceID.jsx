import React from "react";
import {
  StatusSVG,
  CalenderSVG,
  StripeSVG,
  DotbtnSVG,
  SmsSVG,
} from "../../../../../constants/Icons";

const AdminInvoiceID = ({viewType}) => {
  const isPaid = viewType === "PaidInvoiceView"; 

  return (
    <div className="flex w-full gap-5">
      <div className="border border-[#E4E5E8] p-5 rounded-[12px] w-1/2">
        <div className="mb-3">
          <h2 className="text-xl font-semibold">Invoice ID: INV-00345</h2>
        </div>
        <div className="max-w-[639px] md:flex-nowrap flex-wrap flex justify-between md:flex-row flex-col">
          <div>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={SmsSVG} alt="img" />
              <strong className="font-semibold">Date Issued:</strong> June 20,
              2025
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={SmsSVG} alt="img" />
              <strong className="font-semibold">Due Date: </strong> June 14,
              2025
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={SmsSVG} alt="img" />
              <strong className="font-semibold"> Payment Method:</strong> Stripe
            </h3>
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={CalenderSVG} alt="img" />
              <strong className="font-semibold"> Invoice Amount:</strong> $1,200
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-bold mb-2.5">
              <img src={StatusSVG} alt="img" />
              Status:
              <span
                className={`rounded-2xl px-2 py-0.5 font-normal ${
                  isPaid
                    ? "bg-[#DCFCE7] text-[#166534]" // Red-ish for Paid
                    : "bg-[#FEF3C7] text-[#92400E]" // Yellow-ish for Unpaid
                }`}
              >
                {isPaid ? "Paid" : "Unpaid"}
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-1/2">
        <h2 className="text-xl font-semibold mb-5">Payment Method:</h2>
        <div className="border border-[#E4E5E8] rounded-[12px] py-3 px-4 flex justify-between items-center mb-4">
          <img src={StripeSVG} alt="img" className="w-[72px] h-[48px]" />
          <img src={DotbtnSVG} alt="img" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default AdminInvoiceID;
