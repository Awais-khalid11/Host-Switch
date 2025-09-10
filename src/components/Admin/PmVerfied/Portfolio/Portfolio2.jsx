import React from "react";
import Overview from "../Overview";

const Portfolio2 = ({ pricing }) => {
  if (!pricing) return null;

  const priceInfo = [
    { title: "Commission Charged:", text: pricing.commission || "N/A" },
    { title: "Onboarding Fees:", text: pricing.onboarding_fees || "N/A" },
    {
      title: "Charges for Linens/Restocking:",
      text: pricing.linens_restocking || "N/A",
    },
    { title: "Maintenance Markup:", text: pricing.maintenance_markup || "N/A" },
    {
      title: "Financial Projection Provided:",
      text: pricing.financial_projection ? "Yes" : "No",
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
