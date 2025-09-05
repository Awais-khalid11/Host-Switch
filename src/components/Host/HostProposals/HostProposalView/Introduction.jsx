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

const Introduction = ({ data }) => {
  return (
    <div className="shadow-[4px_0px_10px_0px_#0000000F] pl-0 p-5 lg:p-5 rounded-[20px]">
      <div className="flex md:flex-nowrap flex-wrap items-center gap-[30px]">
        <div className="md:w-[50%] w-full">
          <div className="flex lg:flex-row flex-col items-start lg:items-end justify-between border-b border-b-[#D8D8D8] pb-5 mb-2">
            <div className="lg:mb-0 mb-2.5">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${
                    data?.company_profile?.company_logo
                  }`}
                  alt=""
                  className="w-[86px] h-[86px] rounded-full"
                />
                <div>
                  <h4 className="text-xl font-bold text-[#151923] ">
                    {data?.company_profile?.business_name}
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
                      {data?.company_profile?.business_address}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="flex gap-2">
                  {data?.company_profile?.services?.map((service, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-[9px] md:text-[12px] font-normal text-black rounded-full border border-[#17642F33] bg-[#D8F2D9]"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-b-[#F5F5F5] pb-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <h4 className="text-sm font-normal text-[#1B252B] mb-2">
              {data?.description}
            </h4>
          </div>
          <HostServices data={data} />
          <h3 className="font-semibold text-xl mb-4">Documents</h3>
          <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] py-8 px-5">
            <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
              <img src={FilePNG} alt="img" />
              PDF Doc
            </h4>

            <a
              href={`${import.meta.env.VITE_IMG_URL}${data?.property_proposal}`}
              download="Document.pdf"
              className="text-[12px] font-semibold flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <img src={BlackpdfSVG} alt="pdf" />
              Document.pdf
            </a>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <div className="mb-5">
            <h3 className="text-xl font-bold mb-5">Introduction Video</h3>
            <video
              controls
              src={`${import.meta.env.VITE_IMG_URL}${data?.introduction_video}`}
              alt="introduction-video"
              className="rounded-[12px] lg:min-w-[422px] w-full  lg:min-h-[451px]"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Gallery</h3>
            <div className="flex lg:flex-nowrap flex-wrap items-center gap-2.5">
              {data?.company_profile?.office_photos?.map((photo, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.VITE_IMG_URL}${photo}`}
                  alt={`office-photo-${index}`}
                  className="w-full md:h-[83px] object-cover rounded-[9px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
