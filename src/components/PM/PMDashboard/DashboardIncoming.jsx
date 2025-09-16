// DashboardIncoming.jsx
import React, { useEffect, useState } from "react";
import IncomingCards from "../../IncomingCards/IncomingCards";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";

const DashboardIncoming = ({ setCardDetail }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const res = await getData("/leads/incoming?limit=3");

        if (res?.payload?.records) {
          setLeads(res.payload.records);
        } else {
          setLeads([]);
        }
      } catch (err) {
        console.error("Failed to fetch incoming leads:", err);
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton variant="host-owner" count={3} />
      ) : leads.length > 0 ? (
        <IncomingCards incomingData={leads} setCardDetail={setCardDetail} />
      ) : (
        <NoDataFound
          message="No Leads"
          subMessage="You don't have any incoming leads yet."
          className="my-6"
        />
      )}
    </div>
  );
};

export default DashboardIncoming;
