import React from "react";
import Button from "../Button/Button";
import { BackarrowSVG, DownloadSVG, WhitearrowSVG } from "../../constants/Icons";

const ConfirmModal = () => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Button variant="defaultBtn" className="border border-white px-6 py-4" prefixImg={WhitearrowSVG}>
          Return to Dashboard
        </Button>
        <Button variant="whitebtn" className="px-6 py-4" prefixImg={DownloadSVG}>
         Download Receipt
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
