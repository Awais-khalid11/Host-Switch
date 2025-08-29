import React, { useEffect, useState } from "react";
import DashboardIncoming from "./DashboardIncoming";
import TrustedContactsTable from "./TrustedContactsTable";
import DashboardMessages from "./DashboardMessages";
import DashboardCards from "../../DashboardCards/DashboardCards";
import {
  AcceptSVG,
  LeadsSVG,
  PendingSVG,
  SentSVG,
} from "../../../constants/Icons";
import Views from "../../Views/Views";
import SendProposal from "../../SendProposal/SendProposal";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";

const PMDashboard = () => {
  const [cardDetail, setCardDetail] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const data = await getData("auth/property-manager/dashboard/summary");

        if (data?.payload) {
          setStats({
            newLeads: data.payload.leads ?? 0,
            sentProposals: data.payload.sentProposals ?? 0,
            acceptedProposals: data.payload.acceptedProposals ?? 0,
            pendingProposals: data.payload.pendingProposals ?? 0,
            recentConversations: data.payload.recentConversations ?? {
              records: [],
              total: 0,
            },
          });
        } else {
          setStats(null);
        }
      } catch (err) {
        console.error("Failed to fetch PM dashboard summary:", err);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const cardsInfo = stats
    ? [
        { img: LeadsSVG, text: "New Leads", title: stats.newLeads },
        { img: SentSVG, text: "Sent Proposals", title: stats.sentProposals },
        {
          img: AcceptSVG,
          text: "Accepted Proposals",
          title: stats.acceptedProposals,
        },
        {
          img: PendingSVG,
          text: "Pending Proposals",
          title: stats.pendingProposals,
        },
      ]
    : [];

  if (cardDetail === "view") {
    return <Views setClose={() => setCardDetail(null)} />;
  }

  if (cardDetail === "proposal") {
    return <SendProposal setClose={() => setCardDetail(null)} />;
  }

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Overview</h2>
        <div className="my-3">
          {loading ? (
            <Skeleton variant="card" count={1} hasImage rows={3} />
          ) : cardsInfo.length > 0 ? (
            <DashboardCards data={cardsInfo} />
          ) : (
            <NoDataFound
              message="No Dashboard Data"
              subMessage="We couldn't load your dashboard summary at this time."
              className="my-6"
            />
          )}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="font-bold text-2xl mb-2.5">Incoming Leads</h2>
        <DashboardIncoming setCardDetail={setCardDetail} />
      </div>

      {/* Contacts & Messages */}
      <div className="flex md:flex-nowrap flex-wrap gap-2.5 lg:gap-5">
        <div className="md:w-[65%] w-full">
          <TrustedContactsTable />
        </div>
        <div className="md:w-[35%] w-full">
          <DashboardMessages />
        </div>
      </div>
    </div>
  );
};

export default PMDashboard;
