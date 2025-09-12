import React from "react";
import Overview from "../Overview";

const Portfolio1 = ({ portfolio }) => {
  if (!portfolio) return null;

  const portfolioInfo = [
    {
      title: "Active STR Properties:",
      text: portfolio.active_str_properties || "N/A",
    },
    {
      title: "Max Onboarding Capacity (30 days):",
      text: portfolio.max_onboarding_capacity || "N/A",
    },
    {
      title: "Property Types Managed:",
      text: portfolio.property_types_managed?.join(", ") || "N/A",
    },
    {
      title: "Avg Size Managed:",
      text: portfolio.ave_size_managed || "N/A",
    },
    {
      title: "Minimum Property Requirements:",
      text: portfolio.property_requirement || "N/A",
    },
    {
      title: "Service Type:",
      text: portfolio.service_type?.join(", ") || "N/A",
    },
    {
      title: "Agreement Type:",
      text: portfolio.agreement_type?.join(", ") || "N/A",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Portfolio & Capacity</h2>
      <Overview companyData={portfolioInfo} />
    </div>
  );
};

export default Portfolio1;
