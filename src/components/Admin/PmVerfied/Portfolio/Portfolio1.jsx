import React from "react";
import Overview from "../Overview";

const Portfolio1 = ({ portfolio }) => {
  if (!portfolio) return null;

  const portfolioInfo = [
    {
      title: "Active STR Properties:",
      text: portfolio.active_properties || "N/A",
    },
    {
      title: "Max Onboarding Capacity (30 days):",
      text: portfolio.max_onboarding_capacity || "N/A",
    },
    {
      title: "Property Types Managed:",
      text: portfolio.property_types || "N/A",
    },
    { title: "Avg Size Managed:", text: portfolio.avg_size || "N/A" },
    {
      title: "Minimum Property Requirements:",
      text: portfolio.min_requirements || "N/A",
    },
    { title: "Service Type:", text: portfolio.service_type || "N/A" },
    { title: "Agreement Type:", text: portfolio.agreement_type || "N/A" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Portfolio & Capacity</h2>
      <Overview companyData={portfolioInfo} />
    </div>
  );
};

export default Portfolio1;
