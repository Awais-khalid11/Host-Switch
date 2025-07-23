import React from 'react'
import AcceptInfo from './AcceptInfo'
import AcceptImgs from './AcceptImgs'
import Button from '../../../Button/Button'

const AdminAccepted = () => {
  return (
     <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full mb-5">
      <div className='flex justify-between items-center mb-6'>
        <h3 className="font-semibold text-xl">Accepted PM Info</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <AcceptInfo />
        <AcceptImgs />
      </div>
    </div>
  )
}

export default AdminAccepted
