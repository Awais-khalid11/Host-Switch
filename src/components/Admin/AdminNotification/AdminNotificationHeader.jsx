import React from 'react'
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from '../../../Constants/Icons'
import Button from '../../Button/Button'
import FilterDropdown from '../../FilterDropdown/FilterDropdown'

const AdminNotificationHeader = () => {
  return (
    <div className='flex items-center justify-between mt-2.5 mb-5'>
      <div className='flex items-center md:gap-5 gap-3'>
        <div className='flex items-center gap-1.5 uppercase border-b border-b-[#4D72FF] pb-2.5'><h2 className='md:text-base text-[10px] font-bold text-[#4D72FF]'>Unread</h2><img src={TwoSVG} alt="" /></div>
        <h3 className='md:text-base text-[10px]  font-bold text-[#77787C] uppercase pb-2.5'>all notifications</h3>
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
