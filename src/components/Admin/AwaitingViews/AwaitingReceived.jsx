import React, { useState } from "react";
import Table from "../../Table/Table";
import { useNavigate } from "react-router-dom";
import { UserPNG } from "../../../constants/Imgs";
import Button from "../../Button/Button";
import { ROUTES } from "../../../constants/Routes";
import { BlueeyeSVG, TrashSVG } from "../../../constants/Icons";
import PmVerified from "../PmVerfied/PmVerified";

const AwaitingReceived = ({ setPmPage }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const allData = [
    {
      UserImg: UserPNG,
      reviews: "StayWell Homes",
      first_name: "StayWell Homes",
      property: "123 Palm Ave, Miami",
      date: "04 June 2025",
      status: "Awaiting ",
    },
    {
      UserImg: UserPNG,
      reviews: "StayWell Homes",
      first_name: "StayWell Homes",
      property: "123 Palm Ave, Miami",
      date: "04 June 2025",
      status: "Awaiting ",
    },
  ];

  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    {
      accessor: "pm",
      header: "PM Company",
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
    { header: "Property", accessor: "property", showSort: true },
    { header: "Sent Date", accessor: "date", showSort: true },
    {
      header: "Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Awaiting"
            ? "border border-[#FFAF3F1A] bg-[#FFAF3F1A]  text-[#FFAF3F]"
            : "border border-[#FFAF3F1A] bg-[#FFAF3F1A]  text-[#FFAF3F]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass}`}
          >
            {status}
          </div>
        );
      },
    },
  ];

  const rowActions = (rowData) => {
    return (
      <div className="flex gap-2.5">
        <button>
          <img
            src={BlueeyeSVG}
            alt=""
            className="cursor-pointer"
            onClick={() => setPmPage(<PmVerified setClose={setPmPage} />)}
          />
        </button>
        <button>
          <img src={TrashSVG} alt="" className="cursor-pointer" />
        </button>
      </div>
    );
  };

  return (
    <div className="rounded-[12px] border border-[#E4E5E8] p-5 mb-5">
      <div className="rounded-xl bg-white overflow-hidden">
        <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
          Proposals Received
        </h2>

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

export default AwaitingReceived;
