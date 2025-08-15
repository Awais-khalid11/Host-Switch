import React from 'react'
import Overview from '../Overview'

const reviewInfo = [
    {title: "PMS:", text: "Guesty"},
    {title: "Pricing Tool:", text: "PriceLabs"},
    {title: "Owner Portal:", text: "Yes"},
    {title: "Guest Comm:", text: "Hybrid (Human + Automated)"},
    {title: "Smart Home Tools:", text: "NoiseAware, Smart Thermostat"},
    {title: "Maintenance Tickets:", text: "Full-Service + Co-hosting"},
    {title: "Agreement Type:", text: "Yes (via Breezeway)"},
]

const Review1 = () => {
  return (
     <div>
      <h2 className="text-xl font-semibold mb-3">Tech Stack & Tools</h2>
      <Overview companyData={reviewInfo} className="h-[250px]"/>
    </div>
  )
}

export default Review1
