import React from "react";
import { AcceptSVG, HostSVG, InvoiceSVG, PmsSVG  } from "../../../constants/Icons";
import DashboardCards from "../../DashboardCards/DashboardCards";

const hostcards = [
    { img: HostSVG, text: "Total Hosts", title: "2534+" },
    { img: PmsSVG, text: "Total Hosts", title: "2534+" },
    { img: AcceptSVG, text: "Active Matches", title: "100" },
    { img: InvoiceSVG, text: "Pending Invoices", title: "120+" },
];

const AdminDashboardCards = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-5">Overview</h2>
      <div className="mb-5"><DashboardCards data={hostcards} /></div>
    </div>
  );
};

export default AdminDashboardCards;
