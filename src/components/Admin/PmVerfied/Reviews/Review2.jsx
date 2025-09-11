import React from "react";
import Overview from "../Overview";

const Review2 = ({ data }) => {
  const reviewInfo = [
    { title: "Avg Review Rating:", text: data?.avg_review_rating || "N/A" },
    { title: "Airbnb Listings:", text: data?.airbnb_listing || "N/A" },
    { title: "Superhost Status:", text: data?.superhost_status || "N/A" },
    { title: "Booking Platforms:", text: data?.booking_platform || "N/A" },
    {
      title: "% Direct Bookings:",
      text: data?.percentage_direct_booking || "N/A",
    },
    {
      title: "Occupancy Rate (12 months):",
      text: data?.occupancy_rate || "N/A",
    },
    {
      title: "Owner Retention Rate:",
      text: data?.owner_retention_rate || "N/A",
    },
    { title: "Cancellations (6 months):", text: data?.cancellation || "N/A" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Performance & Reviews</h2>
      <Overview companyData={reviewInfo} />
    </div>
  );
};

export default Review2;
