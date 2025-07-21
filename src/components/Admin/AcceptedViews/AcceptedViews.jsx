import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import AdminSam from "../AdminViews/AdminSam";
import AdminPropertyDetails from "../AdminViews/AdminPropertyDetails/AdminPropertyDetails";
import AdminAccepted from "../AdminViews/AdminAccepted/AdminAccepted";
import AdminOverView from "../AdminViews/AdminOverView";
import AcceptedViewTable from "../AdminViews/AcceptedViewTable";
import AcceptedHistoryTable from "../AdminViews/AcceptedHistoryTable";
import AdminDocuments from "../AdminViews/AdminDocument";
import FeebbackHistory from "../AdminViews/FeebbackHistory";
import { BackarrowSVG } from "../../../constants/Icons";
import AcceptedFeebbackHistory from "./AcceptedFeebbackHistory";
import AcceptedDocuments from "./AcceptedDocument";
import AccViewTable from "./AccViewTable";
import HistoryTable from "./HistoryTable";
import AcceptSam from "./AcceptSam";

const AcceptedViews = ({setClose}) => {
  const navigate = useNavigate();
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
          Accepted Host Lead
        </h2>
      </div>
      <AcceptSam />
      <AdminPropertyDetails />
      <AdminAccepted/>
      <AdminOverView/>
      <AccViewTable/>
      <HistoryTable/>
      <AcceptedDocuments />
      <AcceptedFeebbackHistory/>
    </div>
  )
};

export default AcceptedViews;
