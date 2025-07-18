import React, { useState } from "react";
// import { BackarrowSVG, DownloadSVG } from "../../constants/Icons";
// import Button from "../Button/Button";
// import Pay from "../Pay/Pay";
import {
  BackarrowSVG,
  BlackpdfSVG,
  DownloadSVG,
  EyeSVG,
  ResendSVG,
} from "../../../../Constants/Icons";
import Button from "../../../Button/Button";
import AdminInvoiceTotal from "./InvoiceTotal.jsx/AdminInvoiceTotal";
import AdminMethods from "./AdminMethods/AdminMethods";
import { FilePNG } from "../../../../constants/Imgs";

const AdminInvoiceView = ({ setClose }) => {
  return (
    <div className="pb-2.5 pt-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
          Invoice Detail
        </h2>
        <div className="flex items-center gap-2.5">
          <Button
            variant="borderbtn"
            className="border-[#555555] text-[12px] text-[#555555] w-[157px]"
            prefixImg={DownloadSVG}
          >
            Download Invoice
          </Button>
          <Button
            variant="borderbtn"
            className=" text-[12px] text-[#4D72FF] w-[157px]"
            prefixImg={ResendSVG}
          >
            Resend Invoice to PM
          </Button>
        </div>
      </div>
      <AdminMethods />
      <div className="mb-5">
        <AdminInvoiceTotal />
      </div>
      <div className="border border-[#E4E5E8] rounded-[12px] py-5 px-5">
        <h2 className="font-semibold text-xl mb-3">Proposal Documents </h2>
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] py-8 px-5">
          <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
            <img src={FilePNG} alt="img" />
            Contract.pdf
          </h4>
          <h4 className="text-[12px] font-semibold flex items-center gap-1.5">
            <img src={EyeSVG} alt="img" />
           View Documents
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AdminInvoiceView;
