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

const AwaitingViews = ({ setClose }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sendPage, setSendPage] = useState();
    const [pmPage, setPmPage] = useState();
  

      if (pmPage) return pmPage;

  return sendPage ? (
    sendPage
  ) : (
    <div className="pb-2.5 pt-5">
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
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
            onClick={() => setSendPage(<SendProposal setClose={setSendPage} />)}
          >
            Remove Match
          </Button>
          <Button
            variant="borderbtn"
            className="border-[#4D72FF] text-[12px] text-[#4D72FF] max-w-[157px]"
            prefixImg={BlueplusSVG}
            onClick={() => setSendPage(<SendProposal setClose={setSendPage} />)}
          >
            Manually Assign PM
          </Button>
        </div>
      </div>
      <AwaitingSam />
      <AdminPropertyDetails />
      <AdminExpectations />
      <CurrentPM />
      <AwaitingReceived setPmPage={setPmPage}/>
      <AwaitingProposal />
      <AcceptedViewTable />
      <AcceptedDocuments />
    </div>
  );
};

export default AwaitingViews;
