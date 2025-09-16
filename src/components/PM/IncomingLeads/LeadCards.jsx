import React, { useEffect, useState } from "react";
import { AllSVG, EyeSVG, NewSVG, FilterSVG } from "../../../constants/Icons";
import Button from "../../Button/Button";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import IncomingCards from "../../IncomingCards/IncomingCards";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";
import Skeleton from "../../Skeleton/SkeletonCard";

const LeadCards = ({ setCardDetail }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const res = await getData("/property");

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
      <div className="flex justify-between py-5">
        <h2 className="font-bold text-2xl">Incoming Leads</h2>

        {/* <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          options={[
            { label: "All", icon: <img src={AllSVG} alt="All" /> },
            { label: "New", icon: <img src={NewSVG} alt="New" /> },
            { label: "Viewed", icon: <img src={EyeSVG} alt="Viewed" /> },
          ]}
        /> */}
      </div>

      {loading ? (
        <Skeleton variant="host-owner" count={6} />
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

export default LeadCards;
