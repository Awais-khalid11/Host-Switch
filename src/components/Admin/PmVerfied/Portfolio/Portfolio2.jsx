import React from 'react'
import Overview from '../Overview'

const priceInfo = [
     { title: "Commission Charged:", text: "20%" },
     { title: "Onboarding Fees:", text: "Yes ( $250)" },
     { title: "Charges for Linens/Restocking:", text: "Yes" },
     { title: "Maintenance Markup:", text: "No" },
     { title: "Financial Projection Provided:", text: "Yes" },
]

const Portfolio2 = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Pricing & Fees</h2>
      <Overview companyData={priceInfo} className={"h-[220px]"}/>
    </div>
  )
}

export default Portfolio2
