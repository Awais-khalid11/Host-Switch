import React from "react";
import Overview from "../Overview";

const Property2 = ({ marketsCoverage }) => {
  if (!marketsCoverage) return null;

  const propertyInfo = [
    {
      title: "Primary Market(s):",
      text: marketsCoverage.primary_market || "N/A",
    },
    {
      title: "Secondary Markets:",
      text: marketsCoverage.secondary_markets || "N/A",
    },
    {
      title: "Max Distance Willing to Service:",
      text: marketsCoverage.max_distance || "N/A",
    },
    {
      title: "Licensed in All Markets:",
      text: marketsCoverage.licensed_in_all_markets ? "Yes" : "No",
    },
    {
      title: "Handles Permitting:",
      text: marketsCoverage.handles_permitting ? "Yes" : "No",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Markets & Coverage</h2>
      <Overview companyData={propertyInfo} />
    </div>
  );
};

export default Property2;
