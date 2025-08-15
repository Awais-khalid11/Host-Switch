import React from "react";
import AdminPayments from "./AdminPayments";
import { BlackpdfSVG } from "../../../../../constants/Icons";
import { FilePNG } from "../../../../../constants/Imgs";

const AdminInvoiceTotal = () => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5">
      <AdminPayments />
    </div>
  );
};

export default AdminInvoiceTotal;
