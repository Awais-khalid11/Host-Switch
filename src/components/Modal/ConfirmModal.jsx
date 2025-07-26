import React from "react";
import Button from "../Button/Button";
import { BackarrowSVG, DownloadSVG, WhitearrowSVG } from "../../constants/Icons";
import { ROUTES } from "../../constants/Routes";
import { Link, useNavigate } from "react-router-dom";

const ConfirmModal = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-center md:mt-0 mt-2.5 sm:mb-0 mb-5 md:flex-nowrap flex-wrap items-center gap-2.5">
        <Link variant="defaultBtn" 
        className="border border-white rounded-[8px] flex items-center justify-center text-white font-bold px-6 py-4 !w-[250px] h-[48px]"
        to={ROUTES.DASHBOARD}>
          <img src={WhitearrowSVG} alt="" />
          Return to Dashboard
        </Link>
        <Button variant="whitebtn" className="px-6 py-4 !w-[250px]" prefixImg={DownloadSVG}>
         Download Receipt
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
