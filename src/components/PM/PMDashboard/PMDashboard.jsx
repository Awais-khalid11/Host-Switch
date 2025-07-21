import React, { useState } from "react";
import DashboardIncoming from "./DashboardIncoming";
import TrustedContactsTable from "./TrustedContactsTable";
import DashboardMessages from "./DashboardMessages";
import DashboardCards from "../../DashboardCards/DashboardCards";
import {
  AcceptSVG,
  LeadsSVG,
  PendingSVG,
  SentSVG,
} from "../../../constants/Icons";
import Views from "../../Views/Views";
import SendProposal from "../../SendProposal/SendProposal";

const cardsInfo = [
  { img: LeadsSVG, text: "New Leads", title: "2534+" },
  { img: SentSVG, text: "Sent Proposals", title: "2908+" },
  { img: AcceptSVG, text: "Accepted proposals", title: "100" },
  { img: PendingSVG, text: "Pending Proposals", title: "120+" },
];

const PMDashboard = () => {
  const [cardDetail, setCardDetail] = useState(null); // shared state

  if (cardDetail === "view") {
    return <Views setClose={() => setCardDetail(null)} />;
  }

  if (cardDetail === "proposal") {
    return <SendProposal setClose={() => setCardDetail(null)} />;
  }

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Overview</h2>
        <div className="my-3">
          <DashboardCards data={cardsInfo} />
        </div>
      </div>
      <div className="mb-5">
        <h2 className="font-bold text-2xl mb-2.5">Incoming Leads</h2>
        <DashboardIncoming setCardDetail={setCardDetail} />
      </div>
      <div className="flex md:flex-nowrap flex-wrap gap-2.5 lg:gap-5">
        <div className="md:w-[65%] w-full">
          <TrustedContactsTable />
        </div>
        <div className="md:w-[35%] w-full">
          <DashboardMessages />
        </div>
      </div>
    </div>
  );
};

export default PMDashboard;

// className="lg:fixed z-50 bg-white top-20 pt-2.5 w-full pr-[298px]"