import React, { useState } from 'react';
import HostDashboardHeader from './HostDashboardHeader';
import TopMatches from './TopMatches';
import PropertySummary from './PropertySummary';
import DashboardMessages from '../../PM/PMDashboard/DashboardMessages';
import HostSubmission from '../MySubmissions/HostSubmission';

// const HostDashboard = () => {
//   const [isAdding, setIsAdding] = useState(false);

//   return isAdding ? (
//     <HostSubmission setClose={() => setIsAdding(false)} />
//   ) : (
//     <div>
//       <HostDashboardHeader onAddClick={() => setIsAdding(true)} />
//       <TopMatches matchClass={"lg:pt-[200px]"}/>
//       <div className="flex md:flex-nowrap flex-wrap gap-2.5 lg:gap-5">
//         <div className="md:w-[65%] w-full">
//           <PropertySummary />
//         </div>
//         <div className="md:w-[35%] w-full">
//           <DashboardMessages />
//         </div>
//       </div>
//     </div>
//   );
// };

const HostDashboard = () => {
  const [renderPage, setRenderPage] = useState(null);

  return renderPage ? (
    renderPage
  ) : (
    <div>
      {/* Show header ONLY when main dashboard is showing */}
      <HostDashboardHeader onAddClick={() => setRenderPage(<HostSubmission setClose={() => setRenderPage(null)} />)} />

      <TopMatches
        matchClass="lg:pt-[200px]"
        setRenderPage={setRenderPage} // 🔁 So Match can open full pages
      />

      <div className="flex md:flex-nowrap flex-wrap gap-2.5 lg:gap-5">
        <div className="md:w-[65%] w-full">
          <PropertySummary />
        </div>
        <div className="md:w-[35%] w-full">
          <DashboardMessages />
        </div>
      </div>
    </div>
  );
};


export default HostDashboard;
