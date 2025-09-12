import React, { useEffect, useState } from "react";
import Portfolio1 from "./Portfolio1";
import Portfolio2 from "./Portfolio2";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";
import Skeleton from "../../../Skeleton/SkeletonCard"; // adjust the path if needed

const Portfolio = () => {
  const { id } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setPortfolioData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 w-full">
          <Skeleton variant="card" rows={4} count={1} />
        </div>
        <div className="md:w-1/2 w-full">
          <Skeleton variant="card" rows={4} count={1} />
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <p className="text-center text-gray-500">No portfolio data found.</p>
    );
  }

  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5">
      <div className="md:w-1/2 w-full">
        <Portfolio1 portfolio={portfolioData.portfolio_capcity} />
      </div>
      <div className="md:w-1/2 w-full">
        <Portfolio2 pricing={portfolioData.pricing_fees} />
      </div>
    </div>
  );
};

export default Portfolio;
