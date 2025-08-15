import React from "react";
import Payments from "./Payments";

const InvoiceTotal = ({ setPayPage }) => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5">
      <Payments setPayPage={setPayPage} />
    </div>
  );
};

export default InvoiceTotal;
