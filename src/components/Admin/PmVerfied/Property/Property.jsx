import React from 'react'
import Property1 from './Property1'
import Property2 from './Property2'

const Property = () => {
  return (
    <div className='border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5'>
      <div className='md:w-1/2 w-full'><Property1/></div>
      <div className='md:w-1/2 w-full'><Property2/></div>
    </div>
  )
}

export default Property
