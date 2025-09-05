import React, { useEffect } from "react";
import Button from "../../Button/Button";
import FileUpload from "../../UploadFile/UploadFile";
import { getData } from "../../../api/apiClient";

const Media = () => {
  // const fetchProfile = async () => {
  //   try {
  //     const res = await getData("/auth/property-manager/profile");
  //     console.log(res);
  //   } catch (err) {
  //     console.error("Failed to fetch profile:", err);
  //   }
  // };
  // useEffect(() => {
  //   fetchProfile();
  // }, []);
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-[18px] font-bold mb-6 text-[#181D27]">
          Media & Branding
        </h4>
      </div>
      <div>
        <div className="flex gap-x-3 flex-wrap">
          <FileUpload label="Logo Upload" />
          <FileUpload label="Office Photos" />
          <FileUpload label="Introduction Video" />
        </div>
        <div className="flex justify-end">
          <Button
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]"
          >
            Update Media
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Media;
