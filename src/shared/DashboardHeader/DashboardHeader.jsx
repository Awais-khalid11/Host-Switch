

import React, { useState } from "react";
import { BellSVG, HeaderlogoSVG } from "../../constants/Icons";
import SearchField from "../../components/SearchField/SearchField";
import { UserPNG } from "../../constants/Imgs";
import { IoReorderThreeOutline } from "react-icons/io5";

const DashboardHeader = ({
  showSidebar,
  setShowSidebar,
}) => {
  const [search, setSearch] = useState("");

  if (showSidebar && window.innerWidth < 1024) return null;

  return (
    <div className="bg-white pt-2.5">
      <button
        onClick={() => setShowSidebar((prev) => !prev)}
        className="lg:hidden fixed top-8 left-6 z-[100] text-[#252525] "
      >
        <IoReorderThreeOutline size={30} />
      </button>
      <div className="fixed top-2.5 left-0 right-0 z-50 bg-[#F2F7F9] pr-4 pl-13 lg:px-4 py-2 mx-2.5 rounded-[12px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-50">
            <img
              src={HeaderlogoSVG}
              alt="logoImg"
              className="h-[55px] max-w-[60px] md:max-w-[85px]"
            />
            <h2 className="hidden lg:block font-bold text-2xl whitespace-nowrap">
              👋 Welcome back, Harry Doe.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center md:gap-3.5 md:pr-2.5 md:border-r border-[#A4A8AA4D]">
              <SearchField search={search} setSearch={setSearch} />
              <img src={BellSVG} alt="Bell" />
            </div>
            <div className="hidden md:block pl-2.5">
              <div className="flex items-center gap-2.5">
                <img
                  src={UserPNG}
                  alt="userImg"
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <h4 className="font-bold text-base">Harry Doe</h4>
                  <h5 className="text-[12px] text-[#1B252B80] font-normal">
                    Property Manager
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
