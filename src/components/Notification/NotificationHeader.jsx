import React from 'react'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import Button from '../Button/Button'
import { AllSVG, ClockSVG, FilterSVG, TwoSVG } from '../../constants/Icons'

const NotificationHeader = () => {
  return (
    <div className='flex items-center justify-between mt-2.5 mb-5'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-1.5 uppercase border-b border-b-[#4D72FF] pb-2.5'><h2 className='md:text-base text-sm font-bold text-[#4D72FF]'>Unread</h2><img src={TwoSVG} alt="" /></div>
        <h3 className='md:text-base text-sm font-bold text-[#77787C] uppercase pb-2.5'>all notifications</h3>
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
                label: "Unread",
              },
              {
                label: "Proposals",
              },
              {
                label: "Messages",
              },
              {
                label: "Payments & Invoices",
              },
            ]}
          />
    </div>
  )
}

export default NotificationHeader
