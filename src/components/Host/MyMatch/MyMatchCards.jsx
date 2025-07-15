import React from 'react'
import Match from '../Match/Match'
import { LuxePNG, ManImgPNG, ProfessionPNG } from '../../../constants/Imgs'
import { AvatorSVG, DellSVG, StaySVG } from '../../../constants/Icons'

const dashboarddata = [
    {
        image: ManImgPNG,
        globalImg: StaySVG,
        name: "StayWell Homes",
        points: "4.8 (125 reviews)",
        desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
        location: "4517 Washington Ave. Manchester,"
    },
    {
        image: LuxePNG,
        globalImg: AvatorSVG,
        name: "LuxeBnB Mgmt",
        points: "4.8 (125 reviews)",
        desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
        location: "4517 Washington Ave. Manchester,"
    },
    {
        image: ProfessionPNG,
        globalImg: DellSVG,
        name: "LuxeBnB Mgmt",
        points: "4.8 (125 reviews)",
        desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
        location: "4517 Washington Ave. Manchester,"
    },
]

const MyMatchCards = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-5'>My Matches</h2>
      <Match matchdata={dashboarddata}/>
    </div>
  )
}

export default MyMatchCards
