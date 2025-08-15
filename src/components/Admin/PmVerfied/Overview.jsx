import React from 'react'

const Overview = ({companyData ,className, wrapClass}) => {
  return (
    <div className={`${className} border border-[#E4E5E8] p-5 rounded-[12px]`}>
      {companyData.map((item, index)=>(
        <div key={index} className={`${wrapClass} flex  justify-between mb-1.5`}>
            <h4 className='text-sm font-bold w-[160px] whitespace-nowrap'>{item.title}</h4>
            <h5 className='text-sm font-normal'>{item.text}</h5>
        </div>
      ))}
    </div>
  )
}

export default Overview
