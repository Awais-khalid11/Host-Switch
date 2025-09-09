import React, { useEffect, useState } from "react";
import {
  AcceptSVG,
  HostSVG,
  InvoiceSVG,
  PmsSVG,
} from "../../../constants/Icons";
import DashboardCards from "../../DashboardCards/DashboardCards";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";
import Skeleton from "../../Skeleton/SkeletonCard";

const AdminDashboardCards = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const data = await getData("/admin/dashboard/summary");

        if (data?.payload) {
          setStats({
            totalHosts: data.payload.totalHosts ?? 0,
            totalPm: data.payload.totalPm ?? 0, // ✅ matches your API
            activeMatches: data.payload.activeMatches ?? 0,
            pendingInvoices: data.payload.pendingInvoices ?? 0,
          });
        } else {
          setStats(null);
        }
      } catch (err) {
        console.error("Failed to fetch admin dashboard summary:", err);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const adminCards = stats
    ? [
        { img: HostSVG, text: "Total Hosts", title: stats.totalHosts },
        { img: PmsSVG, text: "Total PMs", title: stats.totalPm },
        { img: AcceptSVG, text: "Active Matches", title: stats.activeMatches },
        {
          img: InvoiceSVG,
          text: "Pending Invoices",
          title: stats.pendingInvoices,
        },
      ]
    : [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Overview</h2>
      <div className="mb-5">
        {loading ? (
          <Skeleton variant="card" count={1} hasImage rows={3} />
        ) : adminCards.length > 0 ? (
          <DashboardCards data={adminCards} />
        ) : (
          <NoDataFound
            message="No Dashboard Data"
            subMessage="We couldn't load your dashboard summary at this time."
            className="my-6"
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboardCards;
