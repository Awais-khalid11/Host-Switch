import React from "react";
import Overview from "../Overview";

const Property1 = ({ companyOverview }) => {
  if (!companyOverview) return null;

  const propertyName = [
    { title: "Company Name:", text: companyOverview.business_name },
    { title: "Business Entity Type:", text: companyOverview.business_type },
    { title: "Website:", text: companyOverview.website },
    { title: "Owner Involvement:", text: companyOverview.owner_involvement },
    {
      title: "Local Presence:",
      text: companyOverview.local_presence ? "Yes" : "No",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Company Overview</h2>
      <Overview companyData={propertyName} />
    </div>
  );
};

export default Property1;
