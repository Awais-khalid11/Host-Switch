import React from "react";
import Button from "../Button/Button";
import { BackarrowSVG, DownloadSVG, WhitearrowSVG } from "../../constants/Icons";
import { ROUTES } from "../../constants/Routes";
import { useNavigate } from "react-router-dom";

const ConfirmModal = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Button variant="defaultBtn" className="border border-white px-6 py-4 !w-[250px]" prefixImg={WhitearrowSVG} onClick={()=>navigate(ROUTES.DASHBOARD)}>
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
