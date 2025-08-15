import React from 'react'
import Portfolio1 from './Portfolio1'
import Portfolio2 from './Portfolio2'

const Portfolio = () => {
  return (
    <div className='border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5'>
      <div className='md:w-1/2 w-full'><Portfolio1/></div>
      <div className='md:w-1/2 w-full'><Portfolio2/></div>
    </div>
  )
}

export default Portfolio
