import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import DashboardHeader from "../../../shared/DashboardHeader/DashboardHeader";
import SideBar from "../../../shared/SideBar/SideBar";
import { AdminSidbar } from "../../../shared/SideBar/AdminSidebar";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <DashboardHeader
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        property="Admin"
      />
      <div className="flex relative bg-white h-screen">
        <SideBar
          links={AdminSidbar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div className="flex flex-col flex-1  lg:ml-65 ml-0 bg-white h-[100vh]">
          {/* <div className="relative">
            <button
              onClick={() => setShowSidebar((prev) => !prev)}
              className="lg:hidden fixed left-5 top-8 z-[60] text-[#252525]"
            >
              <FiMenu size={24} />
            </button>
          </div> */}

          <main className="pb-5 p-2.5 mt-20 md:ml-5 bg-white">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
