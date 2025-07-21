import React from 'react'
import Overview from '../Overview'

const reviewInfo = [
    {title: "Avg Review Rating:", text: "4.7/5"},
    {title: "Airbnb Listings:", text: "32"},
    {title: "Superhost Status:", text: "Yes"},
    {title: "Superhost Status:", text: "Airbnb, Vrbo, Direct Website"},
    {title: "% Direct Bookings:", text: "25%"},
    {title: "Occupancy Rate (12 months):", text: "81%"},
    {title: "Owner Retention Rate:", text: "92%"},
    {title: "Cancellations (6 months):", text: "2"},
]

const Review2 = () => {
  return (
    <div >
      <h2 className="text-xl font-semibold mb-3">Performance & Reviews</h2>
      <Overview companyData={reviewInfo} />
    </div>
  )
}

export default Review2
