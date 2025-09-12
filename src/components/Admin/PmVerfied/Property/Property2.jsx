import React from "react";
import Overview from "../Overview";
import { useZipCodeConverter } from "../../../../store/useZipCodeConverter";

const Property2 = ({ marketsCoverage }) => {
  if (!marketsCoverage) return null;
  const primaryMarketLocation = useZipCodeConverter(
    marketsCoverage?.primary_market
  );
  const secondaryMarketLocation = useZipCodeConverter(
    marketsCoverage?.secondary_market
  );
  const propertyInfo = [
    {
      title: "Primary Market(s):",
      text: primaryMarketLocation,
    },
    {
      title: "Secondary Markets:",
      text: secondaryMarketLocation,
    },
    {
      title: "Max Distance Willing to Service:",
      text: marketsCoverage.max_distance_willing || "N/A",
    },
    {
      title: "Licensed in All Markets:",
      text: marketsCoverage.licensed_market ? "Yes" : "No",
    },
    {
      title: "Handles Permitting:",
      text:
        marketsCoverage.handle_permitting === null
          ? "N/A"
          : marketsCoverage.handle_permitting
          ? "Yes"
          : "No",
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
