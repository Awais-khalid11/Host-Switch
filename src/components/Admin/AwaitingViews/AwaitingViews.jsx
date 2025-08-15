import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, BlueplusSVG, ReddelSVG } from "../../../constants/Icons";
import Button from "../../Button/Button";
import AwaitingSam from "./AwaitingSam";
import AdminPropertyDetails from "../AdminViews/AdminPropertyDetails/AdminPropertyDetails";
import AdminExpectations from "../AdminViews/AdminExpectations";
import CurrentPM from "../../Views/CurrentPM";
import AcceptedViewTable from "../AdminViews/AcceptedViewTable";
import AcceptedDocuments from "../AcceptedViews/AcceptedDocument";
import AwaitingProposal from "./AwaitingProposal";
import AwaitingReceived from "./AwaitingReceived";
import ManuallyAsign from "../../ManuallyAsign/ManuallyAsign";

const AwaitingViews = ({ setClose }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [manualPage, setManualPage] = useState();


  return manualPage ? (
    manualPage
  ) : (
    <div className="pb-2.5 lg:pt-0 pt-5 lg:-mt-2.5">
      <div className="lg:fixed lg:w-full bg-white z-50 lg:py-5 lg:pr-[300px] flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
          Awaiting Host Lead
        </h2>
        <div className="flex items-center gap-2.5">
          <Button
            variant="borderbtn"
            className="border-[#CE1B1B] text-[12px] text-[#CE1B1B] max-w-[157px]"
            prefixImg={ReddelSVG}
          >
            Remove Match
          </Button>
          <Button
            variant="borderbtn"
            className="border-[#4D72FF] text-[12px] text-[#4D72FF] max-w-[157px]"
            prefixImg={BlueplusSVG}
            onClick={()=>setManualPage(<ManuallyAsign setClose={setManualPage}/>)}
          >
            Manually Assign PM
          </Button>
        </div>
      </div>
      <div className="lg:pt-24">
        <AwaitingSam />
        <AdminPropertyDetails />
        <AdminExpectations />
        <CurrentPM />
        <AwaitingReceived />
        <AwaitingProposal />
        <AcceptedViewTable />
        <AcceptedDocuments />
      </div>
    </div>
  );
};

export default AwaitingViews;
