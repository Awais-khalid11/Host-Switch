import React, { useEffect, useState } from "react";
import Match from "../Match/Match";
import { LuxePNG, ManImgPNG, ProfessionPNG } from "../../../constants/Imgs";
import { AvatorSVG, DellSVG, StaySVG } from "../../../constants/Icons";
import HostProposalView from "../HostProposals/HostProposalView/HostProposalView";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";

const MyMatchCards = () => {
  const [showProposalPage, setShowProposalPage] = useState(false);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getData("/matche?status=suggested&limit=3");

        if (data?.payload?.records?.length > 0) {
          setMatches(data?.payload?.records);
        } else {
          setMatches([]);
        }
      } catch (err) {
        console.error("Failed to fetch matches:", err);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);
  return (
    <div className="w-full">
      {showProposalPage ? (
        <HostProposalView setClose={() => setShowProposalPage(false)} />
      ) : loading ? (
        <Skeleton variant="card" hasImage count={3} />
      ) : matches.length > 0 ? (
        <Match
          matchdata={matches}
          isMyMatchPage={true}
          setShowProposalPage={setShowProposalPage}
        />
      ) : (
        <NoDataFound
          message="No Matches Available"
          subMessage="We couldn't find any property management matches for you at this time. Please try again later."
          className="my-6"
        />
      )}
    </div>
  );
};

export default MyMatchCards;
