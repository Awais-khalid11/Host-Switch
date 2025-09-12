import React from "react";
import Overview from "../Overview";

const Review1 = ({ data }) => {
  const reviewInfo = [
    { title: "PMS:", text: data?.pms?.join(", ") || "N/A" },
    { title: "Pricing Tool:", text: data?.pricing_tool?.join(", ") || "N/A" },
    {
      title: "Owner Portal:",
      text: data?.owner_reporting_portal ? "Yes" : "No",
    },
    {
      title: "Guest Comm:",
      text: data?.guest_communication?.join(", ") || "N/A",
    },
    {
      title: "Smart Home Tools:",
      text: data?.smart_home_tools?.join(", ") || "N/A",
    },
    {
      title: "Maintenance Tickets:",
      text: data?.maintenance_ticket ? "Yes" : "No",
    },
    {
      title: "Agreement Type:",
      text: data?.agreement_type?.join(", ") || "N/A",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tech Stack & Tools</h2>
      <Overview companyData={reviewInfo} />
    </div>
  );
};

export default Review1;
