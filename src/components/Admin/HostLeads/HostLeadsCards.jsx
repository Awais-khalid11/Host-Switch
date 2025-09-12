import React, { useEffect, useState } from "react";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import {
  AllSVG,
  BlueeyeSVG,
  BuildingSVG,
  ClockSVG,
  FilterSVG,
  LocationSVG,
  ProfSVG,
  StatusSVG,
} from "../../../constants/Icons";
import { getData } from "../../../api/apiClient";
import AdminViews from "../AdminViews/AdminViews";
import AcceptedViews from "../AcceptedViews/AcceptedViews";
import AwaitingViews from "../AwaitingViews/AwaitingViews";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";
import { UserPNG } from "../../../constants/Imgs";

const HostLeadsCards = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const [detailPage, setDetailPage] = useState();
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
      } catch (error) {
        console.error("Error fetching leads:", error);
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const filteredData = filterStatus
    ? leads.filter((item) => item.status === filterStatus)
    : leads;

  const statusColor = {
    Rejected: "text-red-500 border-red-300 bg-red-100",
    Accepted: "text-green-500 border-green-300 bg-green-100",
    Awaiting: "text-yellow-600 border-yellow-300 bg-yellow-100",
    true: "text-green-600 border-green-300 bg-green-100",
    false: "text-red-600 border-red-300 bg-red-100",
  };

  return detailPage ? (
    detailPage
  ) : (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="md:text-xl text-lg text-[#181D27] font-bold ">
          Host Leads
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
              label: "Awaiting",
              value: "Awaiting",
              icon: <img src={ClockSVG} alt="Awaiting" />,
            },
            {
              label: "Accepted",
              value: "Accepted",
              icon: <img src={ClockSVG} alt="Accepted" />,
            },
            {
              label: "Rejected",
              value: "Rejected",
              icon: <img src={ClockSVG} alt="Rejected" />,
            },
          ]}
        />
      </div>

      {loading ? (
        <Skeleton variant="card" count={4} />
      ) : filteredData.length > 0 ? (
        <div className="flex w-full flex-wrap gap-4">
          {filteredData.map((user, index) => {
            const userImage = user?.user?.image
              ? `${import.meta.env.VITE_IMG_URL}${user.user.image}`
              : UserPNG;

            return (
              <div
                key={index}
                className="border border-gray-300 rounded-xl md:max-w-[32%] w-full p-4"
              >
                <div className="flex items-center justify-between border-b border-b-[#25252526] pb-3">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={userImage}
                      alt="img"
                      className="w-[46px] h-[46px] rounded-full object-cover border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.src = UserPNG;
                      }}
                    />
                    <div>
                      <h2 className="font-semibold">
                        {user?.user?.name || "Unknown User"}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {user?.user?.email ?? "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <h4 className="text-[12px] font-normal text-[#727272] mb-1">
                      {new Date(user.created_at).toLocaleDateString()}
                    </h4>
                    <div
                      className={`px-2 py-0.5 text-sm rounded-full border w-fit ${
                        statusColor[user.status] || "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {String(user.status)}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  <div className="flex justify-between mb-2">
                    <strong className="flex gap-1.5">
                      <img src={LocationSVG} alt="" />
                      Location:
                    </strong>{" "}
                    {user.city ? `${user.city}, ${user.state || ""}` : "N/A"}
                  </div>
                  <div className="flex justify-between mb-2">
                    <strong className="flex gap-1.5">
                      <img src={StatusSVG} alt="" />
                      Property Type:
                    </strong>
                    {user.type}
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <strong className="flex items-center gap-1.5">
                      <img src={BuildingSVG} alt="" className="w-4 h-4" />
                      Yearly Revenue:
                    </strong>
                    {user.yearly_revenue}
                  </div>
                  <div className="flex justify-between mb-5">
                    <strong className="flex gap-1.5">
                      <img src={ProfSVG} alt="" />
                      Current PM:
                    </strong>
                    {user.current_pm_company_name}
                  </div>
                </div>

                <Button
                  variant="borderbtn"
                  prefixImg={BlueeyeSVG}
                  onClick={() => {
                    if (user.status === "Rejected") {
                      setDetailPage(<AdminViews setClose={setDetailPage} />);
                    } else if (user.status === "Accepted") {
                      setDetailPage(<AcceptedViews setClose={setDetailPage} />);
                    } else {
                      setDetailPage(<AwaitingViews setClose={setDetailPage} />);
                    }
                  }}
                >
                  View Profile
                </Button>
              </div>
            );
          })}
        </div>
      ) : (
        <NoDataFound
          message="No Host Leads"
          subMessage="You don't have any host leads yet."
          className="my-6"
        />
      )}
    </div>
  );
};

export default HostLeadsCards;
