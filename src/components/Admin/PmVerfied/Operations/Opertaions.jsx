import React from "react";
import {
  BlackpdfSVG,
  DellSVG,
  EyeSVG,
  PdfSVG,
  StarSVG,
  TransparentlocationSVG,
} from "../../../../constants/Icons";
import {
  FilePNG,
  Gallery1PNG,
  Gallery2PNG,
  Gallery3PNG,
  Gallery4PNG,
  IntroPNG,
} from "../../../../constants/Imgs";
import HostServices from "../../../Host/HostProposals/HostProposalView/HostServices";
import Overview from "../Overview";
import OperationService from "./OperationService";

const nameData = [
  {
    text: "Cleaning",
    bg: "bg-[#D8F2D9]",
    border: "border-[#17642F33]",
  },
  {
    text: "Maintenance",
    bg: "bg-[#0050B333]",
    border: "border-[#0050B333]",
  },
  {
    text: "Guest Management",
    bg: "bg-[#FFD70033]",
    border: "border-[#FFD70033]",
  },
];

const operationData = [
  { title: "Cleaning Partner:", text: "3rd Party" },
  { title: "Avg Turnover Time:", text: "5 Hours" },
  { title: "Provides Linens & Consumables:", text: "Yes" },
  { title: "Guest Response Time (Avg):", text: "1.5 hrs" },
  { title: "Maintenance Response Time: ", text: "6Hours" },
  { title: "Smart Lock Tech:", text: "Yes (August Lock)" },
];

const Opertaions = ({ mainClass, text }) => {
  return (
    <div className="shadow-[4px_0px_10px_0px_#0000000F] p-5 rounded-[20px]">
      <div className="flex md:flex-nowrap flex-wrap items-center gap-[30px]">
        <div className="md:w-[50%] w-full">
          <OperationService />
          <Overview companyData={operationData} />
        </div>
        <div className="md:w-[50%] w-full">
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-5">Introduction Video</h3>
            <img
              src={IntroPNG}
              alt=""
              className="rounded-[12px] min-w-[422px] w-full object-cover min-h-[451px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opertaions;
