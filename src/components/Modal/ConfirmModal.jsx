import React from "react";
import Button from "../Button/Button";
import { BackarrowSVG, DownloadSVG, WhitearrowSVG } from "../../constants/Icons";
import { ROUTES } from "../../constants/Routes";
import { useNavigate } from "react-router-dom";

const ConfirmModal = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-center md:mt-0 mt-2.5 sm:mb-0 mb-5 md:flex-nowrap flex-wrap items-center gap-2.5">
        <Button variant="defaultBtn" className="border border-white px-6 py-4 !w-[250px] h-[48px]" prefixImg={WhitearrowSVG} onClick={()=>navigate(ROUTES.DASHBOARD)}>
          Return to Dashboard
        </Button>
        <Button variant="whitebtn" className="px-6 py-4 !w-[250px]" prefixImg={DownloadSVG}>
         Download Receipt
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
