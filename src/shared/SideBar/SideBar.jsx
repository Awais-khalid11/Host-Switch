import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderlogoSVG } from "../../constants/Icons";
import useRoleStore from "../../store/useRoleIdStore";

const SideBar = ({ links = [], showSidebar, setShowSidebar }) => {
  const mainLinks = links.filter((link) => link.label !== "Log Out");
  const logoutLink = links.find((link) => link.label === "Log Out");
  const navigate = useNavigate();

  const removeRoleId = useRoleStore((state) => state.removeRoleId);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) setShowSidebar(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    removeRoleId();
    navigate("/login");
  };

  return (
    <>
      {showSidebar && (
        <div
          className="z-40 lg:hidden fixed"
          onClick={() => setShowSidebar(false)}
        />
      )}

      <div
        className={`fixed z-40 bg-white lg:w-[261px] w-full 
        ${
          showSidebar && window.innerWidth < 1024
            ? "top-0 h-full"
            : "top-[80px] lg:h-[calc(100vh-80px)]"
        } 
        flex flex-col transition-transform duration-300 ease-in-out
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        <div className="flex flex-col justify-between h-full lg:w-full overflow-y-auto p-5 bg-[#F2F7F9] rounded-[12px] lg:ml-2.5 lg:mt-2.5 lg:mb-2.5">
          <div>
            <div className="lg:hidden mb-4 flex items-center justify-between">
              <img src={HeaderlogoSVG} alt="Logo" className="h-10 w-auto" />
              <button
                onClick={() => setShowSidebar(false)}
                className="text-[#252525] text-4xl font-bold lg:hidden leading-[0.5]"
              >
                &times;
              </button>
            </div>

            <nav className="md:-ml-0 -ml-3">
              {mainLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) => {
                    const base =
                      "flex items-center gap-2 px-5 py-3 transition-all text-sm font-medium mb-1";
                    const active =
                      "bg-[linear-gradient(90deg,_#4D72FF_0%,_rgba(0,80,179,0)_100%)] text-white rounded-l-[12px]";
                    const inactive =
                      "text-[#252525] hover:bg-[#7474741A] rounded-l-[12px]";
                    return `${base} ${isActive ? active : inactive}`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={isActive ? link.activeIcon : link.labelIcon}
                        alt="icon"
                      />
                      <span>{link.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {logoutLink && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-3.5 rounded-[16px] text-sm font-medium transition-all text-[#252525] bg-[linear-gradient(90deg,_#DBE4E8_0%,_rgba(219,228,232,0)_100%)] hover:bg-[linear-gradient(90deg,_#CE1B1B_0%,_rgba(206,27,27,0)_100%)]"
            >
              <img src={logoutLink.labelIcon} alt="Logout Icon" />
              <span>{logoutLink.label}</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
