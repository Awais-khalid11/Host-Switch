import React, { useState } from "react";
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
import { UserPNG } from "../../../constants/Imgs";
import AdminViews from "../AdminViews/AdminViews";
import AcceptedViews from "../AcceptedViews/AcceptedViews";
import AwaitingViews from "../AwaitingViews/AwaitingViews";

const matchData = [
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "Complete",
    properties: 1,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Rejected",
  },
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "Complete",
    properties: 1,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Accepted",
  },
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "In Progress",
    properties: 2,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Awaiting",
  },
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "In Progress",
    properties: 2,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Awaiting",
  },
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "In Progress",
    properties: 2,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Awaiting",
  },
  {
    img: UserPNG,
    name: "Sarah Malik",
    email: "sarah@email.com",
    joined: "Jan 10, 2025",
    location: "Denver, CO",
    onboarding: "Complete",
    properties: 1,
    matchedPM: "StayWell Homes",
    date: "Joined: Jun 10, 2025",
    status: "Rejected",
  },
];

const HostLeadsCards = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const [detailPage, setDetailPage] = useState();

  const filteredData = filterStatus
    ? matchData.filter((item) => item.status === filterStatus)
    : matchData;

  const statusColor = {
    Rejected: "text-red-500 border-red-300 bg-red-100",
    Accepted: "text-green-500 border-green-300 bg-green-100",
    Awaiting: "text-yellow-600 border-yellow-300 bg-yellow-100",
  };

  return detailPage ? (
    detailPage
  ) : (
    <div>
      <div className=" flex items-center justify-between mb-5">
        <h2 className="md:text-xl text-lg text-[#181D27] font-bold ">
          Recent Activity Logs
        </h2>

        <FilterDropdown
          button={
            <Button variant="filterbtn" suffixImg={FilterSVG}>
              Filter
            </Button>
          }
          onSelect={(val) => setFilterStatus(val)} // NEW
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

      {/* Match Cards */}
      <div className="flex w-full flex-wrap gap-4">
        {filteredData.map((user, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl md:max-w-[32%] w-full p-4"
          >
            <div className="flex items-center justify-between border-b border-b-[#25252526] pb-3">
              <div className="flex items-center gap-1.5">
                <img
                  src={user.img}
                  alt="img"
                  className="w-[46px] h-[46px] rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end">
                <h4 className="text-[12px] font-normal text-[#727272] mb-1">
                  {user.date}
                </h4>
                <div
                  className={`px-2 py-0.5 text-sm rounded-full border w-fit ${
                    statusColor[user.status]
                  }`}
                >
                  {user.status}
                </div>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <div className="flex justify-between mb-2">
                <strong className="flex gap-1.5">
                  <img src={LocationSVG} alt="" />
                  Location:
                </strong>{" "}
                {user.location}
              </div>
              <div className="flex justify-between mb-2">
                <strong className="flex gap-1.5">
                  <img src={StatusSVG} alt="" />
                  Onboarding Status:
                </strong>
                {user.onboarding}
              </div>
              <div className="flex justify-between items-center mb-2">
                <strong className="flex items-center gap-1.5">
                  <img src={BuildingSVG} alt="" className="w-4 h-4" />
                  Properties:
                </strong>
                {user.properties}
              </div>
              <div className="flex justify-between mb-5">
                <strong className="flex gap-1.5">
                  <img src={ProfSVG} alt="" />
                  Matched PM:
                </strong>
                {user.matchedPM}
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
                } else if (user.status === "Awaiting") {
                  setDetailPage(<AwaitingViews setClose={setDetailPage} />);
                }
              }}
            >
              View Profile
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostLeadsCards;
