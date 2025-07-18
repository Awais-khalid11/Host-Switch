import React from 'react'
import SwitchBtn from '../../SwitchBtn/SwitchBtn'

const FeedbackSettings = () => {
  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Feedback Settings</h2>
      <div >
        <div className="flex items-center justify-between text-sm w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Enable feedback after proposal acceptance</p>
          <SwitchBtn />
        </div>
        <div className="flex items-center justify-between text-sm w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Auto-prompt feedback after 7 days of inactivity</p>
          <SwitchBtn />
        </div>
      </div>
    </div>
  )
}

export default FeedbackSettings
