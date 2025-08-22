import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import {
  AcceptSVG,
  LeadsSVG,
  TotalSVG,
  WhitecircleSVG,
} from "../../../constants/Icons";
import DashboardCards from "../../DashboardCards/DashboardCards";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";

const HostDashboardHeader = ({ onAddClick }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const data = await getData("/host/dashboard/summary");

        if (data?.payload) {
          setStats({
            totalProposals: data.payload.totalProposals ?? 0,
            totalMatches: data.payload.totalMatches ?? 0,
            bestMatches: data.payload.bestMatches ?? 0,
          });
        } else {
          setStats(null);
        }
      } catch (err) {
        console.error("Failed to fetch dashboard summary:", err);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const hostcards = stats
    ? [
        { img: LeadsSVG, text: "Total Proposals", title: stats.totalProposals },
        { img: TotalSVG, text: "Total Matches", title: stats.totalMatches },
        { img: AcceptSVG, text: "The Best Matches", title: stats.bestMatches },
      ]
    : [];

  return (
    <div>
      <div className=" bg-white -mt-5 pt-5">
        <div className="flex justify-between md:flex-row flex-col md:items-center mb-5">
          <h2 className="text-2xl font-bold md:mb-0 mb-2.5">Overview</h2>
          <Button
            variant="defaultBtn"
            prefixImg={WhitecircleSVG}
            className="w-[206px]"
            onClick={onAddClick}
          >
            Add New Submissions
          </Button>
        </div>

        <div className="mb-5">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : hostcards.length > 0 ? (
            <DashboardCards data={hostcards} />
          ) : (
            <NoDataFound
              message="No Dashboard Data"
              subMessage="We couldn't load your dashboard summary at this time."
              className="my-6"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HostDashboardHeader;
