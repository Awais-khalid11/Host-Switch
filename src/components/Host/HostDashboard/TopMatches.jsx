import React from 'react'
import Match from '../Match/Match'
import { LuxePNG, ManImgPNG,  } from '../../../constants/Imgs'
import { AvatorSVG, StaySVG } from '../../../constants/Icons'
import Button from '../../Button/Button'

const dashboarddata = [
    {
        image: LuxePNG,
        globalImg: AvatorSVG,
        name: "LuxeBnB Mgmt",
        points: "4.8 (125 reviews)",
        desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
        location: "4517 Washington Ave. Manchester,"
    },
    {
        image: ManImgPNG,
        globalImg: StaySVG,
        name: "StayWell Homes",
        points: "4.8 (125 reviews)",
        desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
        location: "4517 Washington Ave. Manchester,"
    },
]

const TopMatches = ({matchClass}) => {
  return (
    <div className={`${matchClass}`}>
        <div className='flex justify-between items-center mb-2.5'>
            <h2 className='text-2xl font-bold'>Top Matches</h2>
            <Button className='bg-transparent text-[#25252599] text-[12px] font-normal'>View All</Button>
        </div>
      <Match matchdata={dashboarddata}/>
    </div>
  )
}

export default TopMatches
