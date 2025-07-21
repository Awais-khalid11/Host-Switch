// import React from 'react'

// const Property2 = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Property2


import React from "react";
import Overview from "../Overview";

const propertyInfo = [
  { title: "Primary Market(s):", text: "San Francisco, CA" },
  { title: "Secondary Markets:", text: "Oakland, Berkeley" },
  { title: "Secondary Markets:", text: "SOMA, Mission District, Downtown" },
  { title: "Max Distance Willing to Service:", text: "30 miles" },
  { title: "Licensed in All Markets:", text: "Licensed in All Markets:" },
  { title: "Handles Permitting:", text: "Yes" },
];

const Property2 = () => {
  return (
    <div >
      <h2 className="text-xl font-semibold mb-3">Markets & Coverage</h2>
      <Overview companyData={propertyInfo} />
    </div>
  );
};

export default Property2;
