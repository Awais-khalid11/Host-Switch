import React from 'react'
import HostDashboardHeader from './HostDashboardHeader'
import TopMatches from './TopMatches'
import PropertySummary from './PropertySummary'
import DashboardMessages from '../../PM/PMDashboard/DashboardMessages'

const HostDashboard = () => {
  return (
    <div>
      <HostDashboardHeader/>
      <TopMatches/>
      <div className="flex md:flex-nowrap flex-wrap gap-2.5 lg:gap-5">
        <div className="md:w-[65%] w-full"><PropertySummary/></div>
        <div className="md:w-[35%] w-full"><DashboardMessages/></div>
      </div>
    </div>
  )
}

export default HostDashboard
