import React, {useState} from "react";
import AwaitingSam from "./RejectedSam";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, CrossSVG, DocumentSVG, MsgSVG } from "../../../../Constants/Icons";
import Button from "../../../Button/Button";
import { ROUTES } from "../../../../constants/Routes";
import PropertyDetails from "../../../Views/PropertyDetails/PropertyDetails";
import HostExpectations from "../../../Views/HostExpectations";
import CurrentPM from "../../../Views/CurrentPM";
import Documents from "../../../Views/Documents";
import SendProposal from "../../../SendProposal/SendProposal";
import RejectedSam from "./RejectedSam";

const RejectedPropsal = ({setClose}) => {
  const navigate = useNavigate();
  const [send, setSend] = useState()

  return send ? (send) : (
     <div className="pb-2.5 pt-5">
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
         Awaiting Proposal
        </h2>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5">
          <Button
            variant="borderbtn"
            className=" !text-[12px] max-w-[157px]"
            prefixImg={DocumentSVG}
           
          >
           Message Host
          </Button>
          <Button
            variant="borderBtn"
            className="!w-[162px] !text-[12px] font-normal h-[48px] px-5 border border-[#555555]"
            prefixImg={CrossSVG}
          >
           Withdraw Proposal
          </Button>
        </div>
      </div>
      <RejectedSam />
      <PropertyDetails />
      <HostExpectations />
      <CurrentPM />
      <Documents />
    </div>
  )
};

export default RejectedPropsal;
