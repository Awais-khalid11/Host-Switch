import React from "react";
import { HandSVG } from "../../../../constants/Icons";

const HostServices = ({ data }) => {
  const offeredServices = data?.services_offered || [];

  const serviceRows = [];
  for (let i = 0; i < offeredServices.length; i += 2) {
    serviceRows.push(offeredServices.slice(i, i + 2));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Services</h2>
      {offeredServices.length === 0 ? (
        <p className="text-gray-500 text-sm">No services available</p>
      ) : (
        serviceRows.map((row, index) => (
          <div
            key={index}
            className="flex justify-between md:flex-nowrap flex-wrap mb-4 items-start gap-2.5"
          >
            {row.map((service, i) => (
              <div key={i} className="flex items-center gap-3 w-[213px]">
                <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                  <img src={HandSVG} alt={service} className="w-5" />
                </span>
                <h4 className="text-sm font-normal text-black">{service}</h4>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default HostServices;
