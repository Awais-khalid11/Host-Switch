// src/components/Layout/DashboardLayout.jsx
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../../../shared/DashboardHeader/DashboardHeader";
import SideBar from "../../../shared/SideBar/SideBar";

// Import all sidebars
import { pmSideBarLinks } from "../../../shared/SideBar/PMSidebar";
import { hostSideBarLinks } from "../../../shared/SideBar/HostSidebar";
import { AdminSidbar } from "../../../shared/SideBar/AdminSidebar";

const MainLayout = ({ property }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Decide which sidebar links to show
  const getSidebarLinks = () => {
    switch (property) {
      case "PM":
        return pmSideBarLinks;
      case "Host":
        return hostSideBarLinks;
      case "Admin":
        return AdminSidbar;
      default:
        return [];
    }
  };

  return (
    <div>
      <DashboardHeader
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        property={property}
        name={property === "PM" ? "Property Manager" : property}
      />

      <div className="flex relative bg-white h-screen">
        <SideBar
          links={getSidebarLinks()}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div className="flex flex-col flex-1 lg:ml-65 ml-0 bg-white h-[100vh]">
          <main className="pb-5 mt-20 md:ml-5 p-2.5 bg-white">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
