import React from "react";
import Button from "../../Button/Button";
import { AcceptSVG, LeadsSVG, TotalSVG, WhitecircleSVG } from "../../../constants/Icons";
import DashboardCards from "../../DashboardCards/DashboardCards";

const hostcards = [
    { img: LeadsSVG, text: "New Leads", title: "2534+" },
    { img: TotalSVG, text: "Total Matches", title: "1007" },
    { img: AcceptSVG, text: "The Best Matches", title: "100" },
];

const HostDashboardHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Overview</h2>
        <Button
          variant="defaultBtn"
          prefixImg={WhitecircleSVG}
          className="w-[206px]"
        >
          Add New Submissions
        </Button>
      </div>
      <div className="mb-5"><DashboardCards data={hostcards} /></div>
    </div>
  );
};

export default HostDashboardHeader;
