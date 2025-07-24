import React from "react";

const AdminCurrentPM = () => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">Host’s Expectations</h3>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        <h4 className="text-sm font-bold mb-2.5">Reported Issues:</h4>
        <ul className="flex md:flex-nowrap flex-wrap whitespace-nowrap text-[12px] md:text-sm md:gap-10 lg:gap-20  pl-5">
            <li>Poor maintenance responsiveness</li>
            <li>Low revenue vs. market average</li>
            <li>No clear reporting</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminCurrentPM;
