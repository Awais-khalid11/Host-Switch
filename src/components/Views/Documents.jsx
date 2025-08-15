import React from "react";
import { FilePNG } from "../../constants/Imgs";
import { EyeSVG } from "../../constants/Icons";

const Documents = () => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">Documents</h3>
      <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] p-5">
        <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
          <img src={FilePNG} alt="img" />
          Document.pdf
        </h4>
        <h4 className="text-[12px] font-bold flex items-center gap-1.5">
          <img src={EyeSVG} alt="img" />
          Document.pdf
        </h4>
      </div>
    </div>
  );
};

export default Documents;
