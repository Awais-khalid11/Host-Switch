import React from "react";
import Review1 from "./Review1";
import Review2 from "./Review2";
import NoDataFound from "../../../NoDataFound";

const Reviews = ({ reviewData }) => {
  if (!reviewData) {
    return <NoDataFound message="No Review Found" />;
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
