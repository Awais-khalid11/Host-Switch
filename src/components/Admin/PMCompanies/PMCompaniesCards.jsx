import React, { useState } from "react";
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
import VerifiedSam from "../PmVerfied/VerifiedSam";
import PmVerified from "../PmVerfied/PmVerified";
import PmUnverified from "../PmUnverified/PmUnverified";

const matchData = [
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Verified",
  },
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Unverified",
  },
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Unverified",
  },
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Verified",
  },
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Verified",
  },
  {
    img: UserPNG,
    name: "StayWell Homes",
    review: "4.8 (125 reviews)@email.com",
    location: " 3 King's Road, Chelsea, London SW3P",
    status: "Unverified",
  },
];

const PMCompaniesCards = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("");
  const [verify, setVerify] = useState();

  const filteredData = filterStatus
    ? matchData.filter((item) => item.status === filterStatus)
    : matchData;

  const statusColor = {
    Verified: "text-[Verified] border-[#ABEFC6] bg-[#ABEFC6]",
    Unverified: "text-[#CE1B1B] border-[#CE1B1B] bg-[#CE1B1B1A]",
  };

  return verify ? (
    verify
  ) : (
    <div>
      <div className=" flex items-center justify-between mb-5">
        <h2 className="md:text-xl text-base text-[#181D27] font-bold ">
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
              icon: <img src={FlagedSVG} alt="Flagged PM"/>,
              labelClass: "!text-[#FF0000]"
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
            <div className="flex gap-1 justify-between border-b border-b-[#25252526] pb-3 mb-2">
              <div className="flex gap-1.5">
                <img
                  src={user.img}
                  alt="img"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h2 className="font-normal text-[12px] text-[#151923] mb-1">
                    {user.name}
                  </h2>
                  <div className="text-[11px] whitespace-nowrap mb-1 text-[#1B252B99] flex items-center gap-1">
                    <img src={StarSVG} alt="img" />
                    {user.review}
                  </div>
                  <div className="text-[11px] whitespace-nowrap mb-1 text-[#1B252B99] flex items-center gap-1">
                    <img src={LocationSVG} alt="img" />
                    {user.location}
                  </div>
                </div>
              </div>
              <div
                className={`px-2  text-sm h-[22px] rounded-[90px] ${
                  statusColor[user.status]
                }`}
              >
                <h2>{user.status}</h2>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Services</h3>
              <div className="flex items-center gap-1.5 mb-5">
                <div className="text-[12px] font-normal text-black border border-[#17642F33] px-1.5 py-0.5 rounded-[90px]">
                  Cleaning
                </div>
                <div className="text-[12px] font-normal text-black border border-[#0050B333] px-1.5 py-0.5  rounded-[90px]">
                  Maintenance
                </div>
                <div className="text-[12px] font-normal text-black border border-[#FFD70033] px-1.5 py-0.5 rounded-[90px]">
                  Guest Management
                </div>
              </div>
            </div>

            <Button
              variant="borderbtn"
              prefixImg={BlueeyeSVG}
              onClick={() => {
                if (user.status === "Verified") {
                  setVerify(<PmVerified setClose={setVerify} />);
                } else if (user.status === "Unverified") {
                  setVerify(<PmUnverified setClose={setVerify} />);
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

export default PMCompaniesCards;
