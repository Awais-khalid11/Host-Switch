import React from 'react'
import { CalenderSVG, StatusSVG } from '../../constants/Icons'

const PaidID = () => {
  return (
    <div>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
              <h3 className="text-xl font-bold">Invoice ID: INV-00345</h3>
              <h4 className="text-sm font-normal text-[#727272] mb-2.5">
                June 17, 2025
              </h4>
              <div>
                <h3 className="flex items-center gap-1 text-sm font-normal mb-1.5">
                  <img src={CalenderSVG} alt="img" />
                  <span className="font-semibold"> Match Date:</span> June 14, 2025
                </h3>
                <h3 className="flex items-center gap-1 text-sm font-bold">
                  <img src={StatusSVG} alt="img" />
                  Status:
                  <span className="bg-[#1A932E1A] text-[12px] border border-[#1A932E] font-normal text-[#1A932E] rounded-2xl px-3 py-0.5">
                    Paid
                  </span>
                </h3>
              </div>
            </div>
    </div>
  )
}

export default PaidID
