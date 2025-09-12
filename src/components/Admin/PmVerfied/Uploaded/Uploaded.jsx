import React from "react";
import { FilePNG } from "../../../../constants/Imgs";
import { EyeSVG } from "../../../../constants/Icons";

const Uploaded = ({ text, type, docs }) => {
  let fileUrl = null;

  if (docs) {
    if (type === "statement") fileUrl = docs.sample_owner_statement;
    if (type === "contract") fileUrl = docs.sample_contract;
  }

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">{text}</h3>
      {fileUrl ? (
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] p-5">
          <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
            <img src={FilePNG} alt="img" />
            {fileUrl.split(".").pop().toUpperCase()} File
          </h4>
          <a
            href={`${import.meta.env.VITE_IMG_URL}${fileUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold flex items-center gap-1.5 text-blue-600 cursor-pointer"
          >
            <img src={EyeSVG} alt="img" />
            View Document
          </a>
        </div>
      ) : (
        <p className="text-gray-500">No document uploaded</p>
      )}
    </div>
  );
};

export default Uploaded;
