import React, {useState} from "react";
import { Routes, useNavigate } from "react-router-dom";
import AdminSam from "./AdminSam";
import AdminPropertyDetails from "./AdminPropertyDetails/AdminPropertyDetails";
import AdminExpectations from "./AdminExpectations";
import AdminCurrentPM from "./AdminCurrentPM";
import AdminDocuments from "./AdminDocument";
import { BackarrowSVG, BlueplusSVG, CrossSVG,
  DocumentSVG,
  MsgSVG, } from "../../../constants/Icons";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ROUTES } from "../../../constants/Routes";
import HostDeclineModal from "../../Modal/HostDeclineModal";
import SendProposal from "../../SendProposal/SendProposal";
import AdminAccepted from "./AdminAccepted/AdminAccepted";
import AdminOverView from "./AdminOverView";
import AcceptedViewTable from "./AcceptedViewTable";
import AcceptedHistoryTable from "./AcceptedHistoryTable";
import FeebbackHistory from "./FeebbackHistory";

const AdminViews = ({setClose}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sendPage, setSendPage] = useState();

  return sendPage ? (sendPage) : (
    <div className="pb-2.5 pt-5">
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
          Rejected Host Lead
        </h2>
        <div>
          <Button
            variant="borderbtn"
            className="border-[#4D72FF] text-[12px] text-[#4D72FF] max-w-[157px]"
            prefixImg={BlueplusSVG}
            onClick={() => setSendPage(<SendProposal  setClose={setSendPage}/>)}
          >
            Manually Assign PM
          </Button>
        </div>
      </div>
      <AdminSam />
      <AdminPropertyDetails />
      <AdminAccepted/>
      <AdminOverView/>
      <AcceptedViewTable/>
      <AcceptedHistoryTable/>
      {/* <AdminExpectations /> */}
      {/* <AdminCurrentPM /> */}
      <AdminDocuments />
      <FeebbackHistory/>
    </div>
  )
};

export default AdminViews;
