import React, { useEffect, useState } from "react";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";
import Review1 from "./Review1";
import Review2 from "./Review2";

const Reviews = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setReviewData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  if (!reviewData) {
    return <p className="text-center text-gray-500">Loading reviews data...</p>;
  }

  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5">
      <div className="md:w-1/2 w-full">
        <Review1 data={reviewData.tech_stack_tools} />
      </div>
      <div className="md:w-1/2 w-full">
        <Review2 data={reviewData.performance_reviews} />
      </div>
    </div>
  );
};

export default Reviews;
