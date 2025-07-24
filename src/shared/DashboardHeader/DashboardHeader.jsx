import React, { useState } from "react";
import { BellSVG, HeaderlogoSVG } from "../../constants/Icons";
import SearchField from "../../components/SearchField/SearchField";
import { UserPNG } from "../../constants/Imgs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";

const DashboardHeader = ({ showSidebar, setShowSidebar, name, property }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (showSidebar && window.innerWidth < 1024) return null;

  return (
    <div>
      <button
        onClick={() => setShowSidebar((prev) => !prev)}
        className="lg:hidden fixed top-8 left-6 text-[#252525] "
      >
        <IoReorderThreeOutline size={30} />
      </button>
      <div className="bg-white fixed top-0 right-0 left-0 pt-2.5 z-99 ">
        <div className=" bg-[#F2F7F9] pr-4 pl-13 lg:px-4 py-2 mx-2.5 rounded-[12px]">
          <div className="flex justify-between items-center">
            <div className="flex relative !z-50 items-center gap-30">
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
                <img
                  src={BellSVG}
                  alt="Bell"
                  className="cursor-pointer"
                  onClick={() => {
                    if (property === "Host") {
                      navigate(ROUTES.HOSTNOTIFICATION);

                    } else if (property === "Admin") {
                      navigate(ROUTES.ADMINNOTIFICATION);
                    } else if (property === "PM"){
                      navigate(ROUTES.PMNOTIFICATION)
                    }
                  }}
                />
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
                      {name}
                    </h5>
                  </div>
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
