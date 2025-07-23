import React from "react";
import Overview from "./Overview";

const reviewInfo = [
  { title: "Company Tagline:", text: "“Luxury Experience, Local Management.”" },
  { title: "Not a Good Fit For:", text: "Owners who want full control" },
  {
    title: "Ideal Owner Values:",
    text: "Revenue Optimization, Communication, Cleanliness",
  },
  {
    title: "Intro Video:",
    text: (
      <span className="underline cursor-pointer">Watch Now</span>
    ),
  },

  { title: "Logo", text: "Uploaded" },
];

const Brand = () => {
  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5">
      <h2 className="text-xl font-semibold mb-3">Brand Personality & Fit</h2>
      <Overview companyData={reviewInfo} wrapClass={"md:flex-row flex-col"} />
    </div>
  );
};

export default Brand;
