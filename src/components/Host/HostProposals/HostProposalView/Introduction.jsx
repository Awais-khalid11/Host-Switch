import React from "react";
import {
  BlackpdfSVG,
  DellSVG,
  EyeSVG,
  PdfSVG,
  StarSVG,
  TransparentlocationSVG,
} from "../../../../constants/Icons";
import SemiCircleProgress from "../../MatchScore";
import HostServices from "./HostServices";
import {
  FilePNG,
  Gallery1PNG,
  Gallery2PNG,
  Gallery3PNG,
  Gallery4PNG,
  IntroPNG,
} from "../../../../constants/Imgs";

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

const Introduction = ({ mainClass, text }) => {
  return (
    <div className="shadow-[4px_0px_10px_0px_#0000000F] p-5 rounded-[20px]">
      <div className="flex items-center gap-[30px]">
        <div className="w-[50%]">
          <div className="flex items-end justify-between border-b border-b-[#D8D8D8] pb-5 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={DellSVG} alt="" className="w-[86px] h-[86px]" />
                <div>
                  <h4 className="text-xl font-bold text-[#151923] ">
                    StayWell Homes
                  </h4>
                  <div className="flex items-center mb-1">
                    <img src={StarSVG} alt="" />
                    <h4 className="text-sm font-normal text-[#1B252B99]">
                      4.8 (125 reviews)
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <img src={TransparentlocationSVG} alt="" />
                    <h4 className="text-sm font-normal text-black">
                      4517 Washington Ave.{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="flex gap-2">
                  {nameData.map((item, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 text-[12px] font-normal text-black rounded-full border ${item.bg} ${item.border}`}
                    >
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <SemiCircleProgress />
            </div>
          </div>
          <div className="border-b border-b-[#F5F5F5] pb-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <h4 className="text-sm font-normal text-[#1B252B] mb-2">
              “We don’t just manage — we protect, optimize, and care like it’s
              our own.”
            </h4>
            <div className="text-sm font-normal text-[#1B252B80]">
              <p>
                Your property stays well-maintained, profitable, and in trusted
                hands — from tenant screening to maintenance and reporting.
              </p>
            </div>
          </div>
          <HostServices />
          <h3 className="font-semibold text-xl mb-4">Documents</h3>
          <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] py-8 px-5">
            <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
              <img src={FilePNG} alt="img" />
              PDF Doc
            </h4>
            <h4 className="text-[12px] font-semibold flex items-center gap-1.5">
              <img src={BlackpdfSVG} alt="img" />
              Document.pdf
            </h4>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="mb-5">
            <h3 className="text-xl font-bold mb-5">Introduction Video</h3>
            <img
              src={IntroPNG}
              alt=""
              className="rounded-[12px] min-w-[422px] w-full object-cover min-h-[451px]"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Gallery</h3>
            <div className="flex items-center gap-2.5">
              <img
                src={Gallery1PNG}
                alt="img"
                className="w-full h-[83px] object-cover rounded-[9px]"
              />
              <img
                src={Gallery2PNG}
                alt="img"
                className="w-full h-[83px] object-cover rounded-[9px]"
              />
              <img
                src={Gallery3PNG}
                alt="img"
                className="w-full h-[83px] object-cover rounded-[9px]"
              />
              <img
                src={Gallery4PNG}
                alt="img"
                className="w-full h-[83px] object-cover rounded-[9px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
