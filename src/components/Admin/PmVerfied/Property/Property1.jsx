import React from "react";
import Overview from "../Overview";

const propertyName = [
  { title: "Company Name:", text: "UrbanStay Property Management" },
  { title: "DBA / Operating Name:", text: "UrbanStay" },
  { title: "Business Entity Type:", text: "LLC" },
  { title: "Website:", text: "www.urbanstay.com" },
  { title: "Owner Involvement:", text: "Actively Involved" },
  { title: "Local Presence:", text: "Yes" },
];

const Property1 = () => {
  return (
    <div >
      <h2 className="text-xl font-semibold mb-3">Company Overview</h2>
      <Overview companyData={propertyName} />
    </div>
  );
};

export default Property1;
