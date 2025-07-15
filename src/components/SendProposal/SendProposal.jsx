import React from "react";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG } from "../../constants/Icons";
import SendForm from "./SendForm";
import Button from "../Button/Button";

const SendProposal = () => {
    const navigate = useNavigate()
  return (
    <div className="pt-5">
      <h2 className="font-bold text-2xl flex items-center gap-2 mb-8">
        <img
          src={BackarrowSVG}
          alt="img"
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        Proposal
      </h2>
      <SendForm/>
      <div className="flex justify-end">
        <Button variant=" defaultBtn" className="bg-[#4D72FF] text-white h-[44px] w-[160px]">Submit</Button>
      </div>
    </div>
  );
};

export default SendProposal;
