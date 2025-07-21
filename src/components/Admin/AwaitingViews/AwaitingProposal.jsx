import React, { useState } from "react";
import Table from "../../Table/Table";
// import ActionMenu from "../../DropDown/Dropdown";
import { useNavigate } from "react-router-dom";
import { UserPNG } from "../../../constants/Imgs";
import Button from "../../Button/Button";
import { ROUTES } from "../../../constants/Routes";
import { BlueeyeSVG } from "../../../constants/Icons";

const AwaitingProposal = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const allData = [
    {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      date: "Apr 30, 2025",
      snippet: "We can begin onboarding in 5 days...",
    },
    {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      date: "Apr 30, 2025",
      snippet: "We can begin onboarding in 5 days...",
    },
    {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      date: "Apr 30, 2025",
      snippet: "We can begin onboarding in 5 days...",
    },
  ];

  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    {
      accessor: "property",
      header: "Message From",
      showSort: true,
      cell: ({ row }) => {
        const {
          first_name = "Unknown",
          reviews = "No Email",
          UserImg = UserPNG,
        } = row;

        return (
          <div className="flex items-center gap-3">
            <img
              src={UserImg}
              alt={first_name}
              className="w-[38px] h-[38px] rounded-full object-cover border border-gray-200"
            />
            <div className="flex flex-col">
              <span className="font-medium text-sm text-[#252525] leading-tight mb-1">
                {first_name}
              </span>
              <span className="text-xs text-gray-500 leading-tight">
                {reviews}
              </span>
            </div>
          </div>
        );
      },
    },
    { header: "Date Received", accessor: "date", showSort: true },
    { header: "Snippet", accessor: "snippet", showSort: true },
  ];

  const rowActions = (rowData) => {
    return (
      <button className="flex items-center text-[#4D72FF] text-sm gap-1">
        <img src={BlueeyeSVG} alt="view" className="w-4 h-4" />
        View Chat
      </button>
    );
  };

  return (
    <div className="rounded-[12px] border border-[#E4E5E8] p-5 mb-5">
      <div className="rounded-xl bg-white overflow-hidden">
        <div >
          <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
            Communication History
          </h2>
          
        </div>

        <Table
          columns={columns}
          data={filteredData}
          showActions
          actions={rowActions}
          search={search}
        />
      </div>
    </div>
  );
};

export default AwaitingProposal;
