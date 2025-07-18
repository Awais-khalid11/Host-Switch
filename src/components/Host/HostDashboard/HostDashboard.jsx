import React, { useState } from 'react';
import HostDashboardHeader from './HostDashboardHeader';
import TopMatches from './TopMatches';
import PropertySummary from './PropertySummary';
import DashboardMessages from '../../PM/PMDashboard/DashboardMessages';
import HostSubmission from '../MySubmissions/HostSubmission';

const HostDashboard = () => {
  const [isAdding, setIsAdding] = useState(false);

  return isAdding ? (
    <HostSubmission setClose={() => setIsAdding(false)} />
  ) : (
    <div>
      <HostDashboardHeader onAddClick={() => setIsAdding(true)} />
      <TopMatches />
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
