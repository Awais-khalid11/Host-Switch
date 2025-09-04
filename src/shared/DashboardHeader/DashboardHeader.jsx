import React, { useState } from "react";
import { BellSVG, HeaderlogoSVG } from "../../constants/Icons";
import SearchField from "../../components/SearchField/SearchField";
import { UserPNG } from "../../constants/Imgs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";
import useRoleStore from "../../store/useRoleIdStore";

const DashboardHeader = ({ showSidebar, setShowSidebar, property }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useRoleStore();
  const role =
    user?.role_id === 1 ? "Admin" : user?.role_id === 2 ? "Host" : "PM";

  const HandleLogoClick = () => {
    if (location.pathname.startsWith("/pm")) {
      navigate(ROUTES.DASHBOARD);
    } else if (location.pathname.startsWith("/host")) {
      navigate(ROUTES.HOSTDASHBOARD);
    } else if (location.pathname.startsWith("/admin")) {
      navigate(ROUTES.ADMINDASHBOARD);
    }
  };

  const HandleUserClick = () => {
    if (location.pathname.startsWith("/pm")) {
      navigate(ROUTES.SETTINGS);
    } else if (location.pathname.startsWith("/host")) {
      navigate(ROUTES.HOSTSETTINGS);
    } else if (location.pathname.startsWith("/admin")) {
      navigate(ROUTES.ADMINSETTINGS);
    }
  };

  return (
    <>
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="lg:hidden fixed top-8 left-3 text-[#252525] z-[999]"
        >
          <IoReorderThreeOutline size={30} />
        </button>
      )}

      {!(showSidebar && window.innerWidth < 1024) && (
        <div className="bg-white fixed top-0 right-0 left-0 pt-2.5 z-50">
          <div className="bg-[#F2F7F9] pr-4 pl-8 lg:px-4 py-2 mx-2.5 rounded-[12px]">
            <div className="flex justify-between items-center">
              <div className="flex relative items-center gap-30">
                <img
                  src={HeaderlogoSVG}
                  alt="logoImg"
                  className="h-[55px] max-w-[60px] md:max-w-[85px] cursor-pointer"
                  onClick={HandleLogoClick}
                />
                <h2 className="hidden lg:block font-bold text-2xl whitespace-nowrap">
                  👋 Welcome back, {user?.name}.
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center md:gap-3.5 md:pr-2.5 md:border-r border-[#A4A8AA4D]">
                  {/* <SearchField search={search} setSearch={setSearch} /> */}
                  <img
                    src={BellSVG}
                    alt="Bell"
                    className="cursor-pointer"
                    onClick={() => {
                      if (property === "Host") {
                        navigate(ROUTES.HOSTICONNOTIFICATION);
                      } else if (property === "Admin") {
                        navigate(ROUTES.ICONNOTIFICATION);
                      } else if (property === "PM") {
                        navigate(ROUTES.PMICONNOTIFICATION);
                      }
                    }}
                  />
                </div>
                <div className="hidden md:block pl-2.5">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={
                        user?.image
                          ? `${import.meta.env.VITE_IMG_URL}${user.image}`
                          : UserPNG
                      }
                      alt="userImg"
                      className="rounded-full w-10 h-10 cursor-pointer"
                      onClick={HandleUserClick}
                    />
                    <div>
                      <h4 className="font-bold text-base">{user?.name}</h4>
                      <h5 className="text-[12px] text-[#1B252B80] font-normal">
                        {role}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
