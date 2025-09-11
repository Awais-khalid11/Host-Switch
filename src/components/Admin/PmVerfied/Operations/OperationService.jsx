import React from "react";
import {
  HandSVG,
  OwnerSVG,
  PriceSVG,
  TaxSVG,
  CleanSVG,
  ClaimsSVG,
} from "../../../../constants/Icons";

const serviceIcons = {
  "Guest communication": HandSVG,
  "24/7 Guest Support": HandSVG,
  "Booking Management": HandSVG,
  Cleaning: CleanSVG,
  "Pricing & Revenue": PriceSVG,
  "Emergency Repairs": HandSVG,
  "Multi-Platform Sync": HandSVG,
  "Damage Claims": ClaimsSVG,
  "Cleaning Coordination": CleanSVG,
  "Tax Filing Support": TaxSVG,
  "Listing Creation": HandSVG,
  "Owner Portal Access": OwnerSVG,
};

const OperationService = ({ scopeService }) => {
  if (!scopeService || !scopeService.length) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Operations & Services</h2>
        <p className="text-gray-500">No services information available</p>
      </div>
    );
  }

  const serviceRows = [];
  for (let i = 0; i < scopeService.length; i += 2) {
    serviceRows.push(scopeService.slice(i, i + 2));
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Operations & Services</h2>
      {serviceRows.map((row, index) => (
        <div
          key={index}
          className="flex justify-between mb-5 items-start gap-2.5"
        >
          {row.map((service, i) => (
            <div key={i} className="flex items-center gap-3 w-[213px]">
              <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                <img
                  src={serviceIcons[service] || HandSVG}
                  alt={service}
                  className="w-5"
                />
              </span>
              <h4 className="text-sm font-normal text-black">{service}</h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OperationService;
