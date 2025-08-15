import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, CrossSVG, DocumentSVG, MsgSVG } from "../../../../Constants/Icons";
import PropertyDetails from "../../../Views/PropertyDetails/PropertyDetails";
import HostExpectations from "../../../Views/HostExpectations";
import CurrentPM from "../../../Views/CurrentPM";
import Documents from "../../../Views/Documents";
import AcceptedSam from "./AcceptedSam";

const AcceptedProposal = ({setClose}) => {
  const navigate = useNavigate();

  return (
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
        </div>
      </div>
      <AcceptedSam />
      <PropertyDetails />
      <HostExpectations />
      <CurrentPM />
      <Documents />
    </div>
  );
};

export default AcceptedProposal;
