import React, { useEffect, useState } from "react";
import Portfolio1 from "./Portfolio1";
import Portfolio2 from "./Portfolio2";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { id } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setPortfolioData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };
    fetchPortfolio();
  }, [id]);

  if (!portfolioData) {
    return <p className="text-center text-gray-500">Loading portfolio...</p>;
  }

  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5">
      <div className="md:w-1/2 w-full">
        <Portfolio1 portfolio={portfolioData.portfolio} />
      </div>
      <div className="md:w-1/2 w-full">
        <Portfolio2 pricing={portfolioData.pricing} />
      </div>
    </div>
  );
};

export default Portfolio;
