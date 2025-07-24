import React from 'react'
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from '../../../Constants/Icons'
import Button from '../../Button/Button'
import FilterDropdown from '../../FilterDropdown/FilterDropdown'
import { useNavigate } from 'react-router-dom'

const AdminNotificationHeader = () => {

  return (
    <div className='flex items-center justify-between mt-2.5 mb-5'>
      <div className='flex items-center md:gap-5 gap-3'>
        <div className='flex items-center gap-1.5 uppercase border-b border-b-[#4D72FF] pb-2.5'><h2 className='md:text-base text-[10px] font-bold text-[#4D72FF]'>Unread</h2><img src={TwoSVG} alt="" /></div>
        <h3 className='md:text-base text-[10px]  font-bold text-[#77787C] uppercase pb-2.5 cursor-pointer' >all notifications</h3>

        
      </div>
      <FilterDropdown
            button={
              <Button variant="filterbtn" suffixImg={FilterSVG}>
                Filter
              </Button>
            }
            options={[
              { label: "All" },
              {
                label: "Host Updates",
              },
              {
                label: "PM Updates",
              },
              {
                label: "Payments",
              },
              {
                label: "Feedback",
              },
            ]}
          />
    </div>
  )
}

export default AdminNotificationHeader


// import React, { useState } from "react";
// import TwoSVG from "./path-to-svg"; // Update the path accordingly
// import { useNavigate } from "react-router-dom";
// import AdminNotificationLists from "./path-to-component"; // Update the path accordingly

// const NotificationTabs = () => {
//   const [activeTab, setActiveTab] = useState("unread");
//   const navigate = useNavigate();

//   return (
//     <div className="flex items-center gap-5">
//       {/* Unread */}
//       <div
//         className={`flex items-center gap-1.5 uppercase border-b pb-2.5 ${
//           activeTab === "unread" ? "border-b-[#4D72FF]" : "border-b-transparent"
//         }`}
//         onClick={() => setActiveTab("unread")}
//       >
//         <h2
//           className={`md:text-base text-[10px] font-bold ${
//             activeTab === "unread" ? "text-[#4D72FF]" : "text-[#77787C]"
//           }`}
//         >
//           Unread
//         </h2>
//         <img src={TwoSVG} alt="" />
//       </div>

//       {/* All Notifications */}
//       <h3
//         className={`md:text-base text-[10px] font-bold uppercase pb-2.5 cursor-pointer ${
//           activeTab === "all" ? "text-[#4D72FF]" : "text-[#77787C]"
//         }`}
//         onClick={() => {
//           setActiveTab("all");
//           navigate("/admin/notifications"); // update route if needed
//         }}
//       >
//         All Notifications
//       </h3>
//     </div>
//   );
// };

// export default NotificationTabs;
