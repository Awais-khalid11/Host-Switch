import React from "react";

const CurrentPM = () => {
  const issues = [
    "Poor maintenance responsiveness",
    "Low revenue vs. market average",
    "No clear reporting",
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">Current PM Background</h3>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        <h4 className="text-sm font-bold mb-2.5">Reported Issues:</h4>
        <div className="flex md:flex-nowrap flex-wrap gap-x-10 md:gap-y-2 text-[12px] md:text-sm">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-start gap-1.5">
              <span className="text-[30px] md:-mt-3.5 -mt-4">•</span>
              <span>{issue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentPM;
