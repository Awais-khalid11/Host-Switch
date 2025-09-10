import React from "react";
import Button from "../../Button/Button";
import { BackarrowSVG, ReddelSVG, SlashSVG } from "../../../constants/Icons";
import VerifiedSam from "./VerifiedSam";
import Property from "./Property/Property";
import Portfolio from "./Portfolio/Portfolio";
import Opertaions from "./Operations/Opertaions";
import Reviews from "./Reviews/Reviews";
import Uploaded from "./Uploaded/Uploaded";
import Brand from "./Brand";
import { useNavigate } from "react-router-dom";

const PmVerified = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          PM Company Detail
        </h2>
        <div>
          <Button
            variant="borderbtn"
            className="border-[#FF0000] text-[12px] text-[#FF0000] max-w-[157px]"
            prefixImg={SlashSVG}
          >
            Flag PM
          </Button>
        </div>
      </div>
      <VerifiedSam />
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

export default PmVerified;
