import React, { useState, useEffect } from "react";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import {
  AllSVG,
  BlueeyeSVG,
  ClockSVG,
  FilterSVG,
  FlagedSVG,
  LocationSVG,
  StarSVG,
} from "../../../constants/Icons";
import { UserPNG } from "../../../constants/Imgs";
import { useNavigate } from "react-router-dom";
import PmVerified from "../PmVerfied/PmVerified";
import PmUnverified from "../PmUnverified/PmUnverified";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";

const PMCompaniesCards = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("");
  const [verify, setVerify] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await getData("/user/?role_id=3"); // later we make this dynamic
        if (res?.success) {
          setCompanies(res.payload.records || []);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const filteredData = filterStatus
    ? companies.filter((item) =>
        filterStatus === "Verified"
          ? item.company_profile !== null
          : filterStatus === "Unverified"
          ? item.company_profile === null
          : true
      )
    : companies;

  const statusColor = {
    Verified: "text-[Verified] border-[#ABEFC6] bg-[#ABEFC6]",
    Unverified: "text-[#CE1B1B] border-[#CE1B1B] bg-[#CE1B1B1A]",
  };

  // ✅ Show skeletons instead of text
  if (loading) {
    return (
      <div className="flex w-full flex-wrap gap-4">
        <Skeleton count={6} variant="card" hasImage rows={3} hasButtons />
      </div>
    );
  }

  return verify ? (
    verify
  ) : (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="md:text-xl text-base text-[#181D27] font-bold">
          Recent Activity Logs
        </h2>

        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          onSelect={(val) => setFilterStatus(val)}
          options={[
            { label: "All", value: "", icon: <img src={AllSVG} alt="All" /> },
            {
              label: "Verified",
              value: "Verified",
              icon: <img src={ClockSVG} alt="Verified" />,
            },
            {
              label: "Unverified",
              value: "Unverified",
              icon: <img src={ClockSVG} alt="Unverified" />,
            },
            {
              label: "Flagged PM",
              value: "Flagged PM",
              icon: <img src={FlagedSVG} alt="Flagged PM" />,
              labelClass: "!text-[#FF0000]",
            },
          ]}
        />
      </div>

      <div className="flex w-full flex-wrap gap-4">
        {filteredData.map((user) => {
          const profile = user.company_profile;
          const isVerified = !!profile;

          return (
            <div
              key={user.id}
              className="border border-gray-300 rounded-xl md:max-w-[32%] w-full p-4"
            >
              <div className="flex gap-1 justify-between border-b border-b-[#25252526] pb-3 mb-2">
                <div className="flex gap-1.5">
                  <img
                    src={
                      profile?.company_logo
                        ? `${import.meta.env.VITE_IMG_URL}${
                            profile.company_logo
                          }`
                        : UserPNG
                    }
                    alt="Company Logo"
                    className="w-[40px] h-[40px] rounded-full"
                  />

                  <div>
                    <h2 className="font-normal text-[12px] text-[#151923] mb-1">
                      {profile?.business_name || user.name}
                    </h2>
                    <div className="text-[11px] whitespace-nowrap mb-1 text-[#1B252B99] flex items-center gap-1">
                      <img src={StarSVG} alt="star" />
                      {profile?.expectation_preference?.review_rating ||
                        "N/A"}{" "}
                      ({user.email})
                    </div>
                    <div className="text-[11px] whitespace-nowrap mb-1 text-[#1B252B99] flex items-center gap-1">
                      <img src={LocationSVG} alt="loc" />
                      {profile?.business_address || "No Address"}
                    </div>
                  </div>
                </div>
                <div
                  className={`px-2 text-sm h-[22px] rounded-[90px] ${
                    statusColor[isVerified ? "Verified" : "Unverified"]
                  }`}
                >
                  <h2>{isVerified ? "Verified" : "Unverified"}</h2>
                </div>
              </div>

              {isVerified && (
                <div>
                  <h3 className="font-semibold text-base mb-3">Services</h3>
                  <div className="flex items-center gap-1.5 mb-5 flex-wrap">
                    {profile.operation_service?.scope_service?.map(
                      (service, idx) => (
                        <div
                          key={idx}
                          className="text-[12px] font-normal text-black border border-[#17642F33] px-1.5 py-0.5 rounded-[90px]"
                        >
                          {capitalizeFirstLetter(service)}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <Button
                variant="borderbtn"
                prefixImg={BlueeyeSVG}
                onClick={() => {
                  if (isVerified) {
                    setVerify(
                      <PmVerified setClose={setVerify} userId={user.id} />
                    ); // Pass user.id
                  } else {
                    setVerify(
                      <PmUnverified setClose={setVerify} userId={user.id} />
                    ); // Also update PmUnverified if needed
                  }
                }}
              >
                View Profile
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PMCompaniesCards;
