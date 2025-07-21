import React from 'react'
import SwitchBtn from '../../SwitchBtn/SwitchBtn'

const NotificationsAlerts = () => {
  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Notifications & Alerts</h2>
      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Admin Notification Email</p>
          <SwitchBtn />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>New Host Registered</p>
          <SwitchBtn />
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>New PM Registered</p>
          <SwitchBtn />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Proposal Accepted</p>
          <SwitchBtn />
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Invoice Paid</p>
          <SwitchBtn />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Message Received</p>
          <SwitchBtn />
        </div>
      </div>
    </div>
  )
}

export default NotificationsAlerts
