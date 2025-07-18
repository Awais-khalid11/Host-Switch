import React, {useState} from "react";
import AwaitingSam from "./AwaitingSam";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, DocumentSVG, MsgSVG } from "../../../../Constants/Icons";
import Button from "../../../Button/Button";
import { ROUTES } from "../../../../constants/Routes";
import PropertyDetails from "../../../Views/PropertyDetails/PropertyDetails";
import HostExpectations from "../../../Views/HostExpectations";
import CurrentPM from "../../../Views/CurrentPM";
import Documents from "../../../Views/Documents";
import SendProposal from "../../../SendProposal/SendProposal";

const AwaitingPropsal = ({setClose}) => {
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
         Accepted Proposal
        </h2>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5">
          <Button
            variant="borderbtn"
            className="border-[#4D72FF] text-[#4D72FF] max-w-[157px]"
            prefixImg={DocumentSVG}
            onClick={() => setSend(<SendProposal setClose={setSend}/>)}
          >
            Send Proposal
          </Button>
          <Button
            variant="greenbtn"
            className="w-[157px] px-5"
            prefixImg={MsgSVG}
            onClick={() => navigate(ROUTES.MESSAGES)}
          >
            Message Host
          </Button>
        </div>
      </div>
      <AwaitingSam />
      <PropertyDetails />
      <HostExpectations />
      <CurrentPM />
      <Documents />
    </div>
  )
};

export default AwaitingPropsal;
