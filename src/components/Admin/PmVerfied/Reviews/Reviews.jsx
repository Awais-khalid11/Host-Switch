import React, { useEffect, useState } from "react";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";
import Review1 from "./Review1";
import Review2 from "./Review2";
import Skeleton from "../../../Skeleton/SkeletonCard"; // ✅ adjust path if needed

const Reviews = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setReviewData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 w-full">
          <Skeleton variant="card" rows={5} count={1} />
        </div>
        <div className="md:w-1/2 w-full">
          <Skeleton variant="card" rows={5} count={1} />
        </div>
      </div>
    );
  }

  if (!reviewData) {
    return <p className="text-center text-gray-500">No reviews data found.</p>;
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
