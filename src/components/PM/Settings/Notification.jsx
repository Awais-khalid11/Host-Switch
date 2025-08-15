import React from 'react'
import SwitchBtn from '../../SwitchBtn/SwitchBtn'
// import SwitchBtn from '../SwitchBtn/SwitchBtn'

const Notification = () => {
  return (
    <div className="border border-[#2F354233] rounded-[12px] p-5 mb-5">
      <h5 className="text-[18px] font-bold mb-8">Notification Preferences</h5>
      <div className='flex md:flex-nowrap flex-wrap gap-2.5'>
         <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
            <p>System Alerts</p>
            <SwitchBtn/>
          </div>
         <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
            <p>Annual Check-In Reminder</p>
            <SwitchBtn/>
          </div>
      </div>
      <div className='flex md:flex-nowrap flex-wrap gap-2.5'>
         <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
            <p>Inactivity Trigger Reminder</p>
            <SwitchBtn/>
          </div>
         <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
            <p>Login Notification</p>
            <SwitchBtn/>
          </div>
      </div>
    </div>
  )
}

export default Notification
