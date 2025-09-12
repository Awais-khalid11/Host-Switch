import React from "react";
import Overview from "../Overview";

const Portfolio2 = ({ pricing }) => {
  if (!pricing) return null;

  const priceInfo = [
    { title: "Commission Charged:", text: pricing.commission_charged || "N/A" },
    { title: "Onboarding Fees:", text: pricing.onboarding_fee ? "Yes" : "No" },
    {
      title: "Charges for Linens/Restocking:",
      text: pricing.charges_linens ? "Yes" : "No",
    },
    {
      title: "Maintenance Markup:",
      text: pricing.mark_maintenance ? "Yes" : "No",
    },
    {
      title: "Financial Projection Provided:",
      text: pricing.financial_projection_onboarding ? "Yes" : "No",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Pricing & Fees</h2>
      <Overview companyData={priceInfo} />
    </div>
  );
};

export default Portfolio2;
