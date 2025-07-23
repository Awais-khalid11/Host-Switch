import React from "react";
import {
    CleanSVG,
  HandSVG,
  PriceSVG,
} from "../../../../constants/Icons"; 

const services = [
  { icon: HandSVG, title: "24/7 Guest Management" },
  { icon: CleanSVG, title: "Cleaning & Turnover" },
  { icon: PriceSVG, title: "Pricing & Revenue" },
  { icon: HandSVG, title: "Emergency Repairs" },
  { icon: HandSVG, title: "Multi-Platform Sync" },
  { icon: HandSVG, title: "Damage Claims" },
];

const HostServices = () => {
  const serviceRows = [];
  for (let i = 0; i < services.length; i += 2) {
    serviceRows.push(services.slice(i, i + 2));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Services</h2>
      {serviceRows.map((row, index) => (
        <div
          key={index}
          className="flex justify-between md:flex-nowrap flex-wrap  mb-4 items-start gap-2.5"
        >
          {row.map((item, i) => (
            <div key={i} className="flex  items-center gap-3 w-[213px]">
              <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                <img src={item.icon} alt={item.title} className="w-5" />
              </span>
              <h4 className="text-sm font-normal text-black">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HostServices;
