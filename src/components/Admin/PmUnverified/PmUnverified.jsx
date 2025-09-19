import React from "react";
import UnVerifiedSam from "./UnVerifiedSam";
import Property from "../PmVerfied/Property/Property";
import Portfolio from "../PmVerfied/Portfolio/Portfolio";
import Opertaions from "../PmVerfied/Operations/Opertaions";
import Reviews from "../PmVerfied/Reviews/Reviews";
import Uploaded from "../PmVerfied/Uploaded/Uploaded";
import Brand from "../PmVerfied/Brand";
import { BackarrowSVG, VerifySVG } from "../../../constants/Icons";
import Button from "../../Button/Button";

const PmUnverified = ({ setClose }) => {
  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
          PM Company Detail
        </h2>
        <div>
          <Button
            variant="borderbtn"
            className="!border-[#1A932E] text-[12px] !text-[#1A932E] max-w-[157px]"
            prefixImg={VerifySVG}
          >
            Mark as verified
          </Button>
        </div>
      </div>
      <UnVerifiedSam />
      <Property />
      <Portfolio />
      <Opertaions />
      <Reviews />
      <Uploaded text={"Uploaded Documents"} />
      <Uploaded text={"Uploaded Contract"} />
      <Brand />
    </div>
  );
};

export default PmUnverified;
