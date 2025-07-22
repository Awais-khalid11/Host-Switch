import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import DashboardHeader from "../../../shared/DashboardHeader/DashboardHeader";
import SideBar from "../../../shared/SideBar/SideBar";
import {  hostSideBarLinks } from "../../../shared/SideBar/HostSidebar";

const HostLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <DashboardHeader
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        name={"Property Manager"}
        property="Host"
      />
      <div className="flex relative bg-white h-screen">
        <SideBar
          links={hostSideBarLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div className="flex flex-col flex-1  lg:ml-65 ml-0 bg-white h-[100vh]">

          <main className="pb-5 mt-20 md:ml-5 p-2.5 bg-white">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HostLayout;
