import React from "react";
import Overview from "../Overview";

const portfolioData = [
  { title: "Active STR Properties:", text: "26" },
  { title: "Max Onboarding Capacity (30 days):", text: "5" },
  { title: "Property Types Managed:", text: "Property Types Managed:" },
  { title: "Avg Size Managed:", text: "2–4 Bedrooms, 900–2200 sqft" },
  {
    title: "Minimum Property Requirements:",
    text: "Min $150 nightly, 4.5+ rating",
  },
  { title: "Service Type:", text: "Service Type:" },
  { title: "Agreement Type:", text: "Exclusive & Non-Exclusive" },
];

const Portfolio1 = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Portfolio & Capacity</h2>
      <Overview companyData={portfolioData} />
    </div>
  );
};

export default Portfolio1;
