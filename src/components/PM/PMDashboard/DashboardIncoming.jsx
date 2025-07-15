import React from 'react'
import IncomingCards from '../../IncomingCards/IncomingCards'
import { UserPNG } from '../../../constants/Imgs'
import { DotsSVG } from '../../../constants/Icons'

const IncomeCards = [
    {
        img: UserPNG,
        title: "Sam Smith",
        text: "Property Owner",
        dotImg: DotsSVG
    },
    {
        img: UserPNG,
        title: "Cameron Williamson",
        text: "Property Owner",
        dotImg: DotsSVG
    },
    {
        img: UserPNG,
        title: "Robert Fox",
        text: "Property Owner",
        dotImg: DotsSVG
    }
]

const DashboardIncoming = () => {
  return (
    <div>
      <IncomingCards incomingData={IncomeCards}/>
    </div>
  )
}

export default DashboardIncoming
