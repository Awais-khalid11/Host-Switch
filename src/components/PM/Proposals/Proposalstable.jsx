import React, { useState } from "react";
import Table from "../../Table/Table";
import ActionMenu from "../../DropDown/Dropdown";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import {
  AllSVG,
  ClockSVG,
  DownloadSVG,
  EyeSVG,
  FilterSVG,
  MsgsSVG,
  SmsSVG,
} from "../../../constants/Icons";
import { UserPNG } from "../../../constants/Imgs";
import { useNavigate } from "react-router-dom";
import AcceptedProposal from "./AcceptedProposal/AcceptedProposal";
import AwaitingPropsal from "./AwaitingPropsal/AwaitingPropsal";

const Proposalstable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [acceptPage, setAcceptPage] = useState(false);

  const allData = [
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Awaiting",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Accepted",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Accepted",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Awaiting",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Rejected",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Awaiting",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Rejected",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Rejected",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Awaiting",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
    {
      first_name: "Sarah Thompson",
      email: "hello@synthesis.bio",
      UserImg: UserPNG,
      property: "1BR Studio",
      status: "Rejected",
      date: "01-01-2025",
      projection: "$90K – $110K",
    },
  ];

  // NEW: Filter the data based on selected status
  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    {
      accessor: "first_name",
      header: "Provider’s Name",
      showSort: true,
     cell: ({ row }) => {
  const {
    first_name = "Unknown",
    email = "No Email",
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
        <span className="font-medium text-sm text-[#252525] leading-tight">
          {first_name}
        </span>
        <span className="text-xs text-gray-500 leading-tight">
          {email}
        </span>
      </div>
    </div>
  );
},

    },

    { header: "Property Address", accessor: "property", showSort: true },
    {
      header: "Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Awaiting"
            ? "bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F]"
            : status === "Accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : "bg-[#CE1B1B1A] border border-[#CE1B1B] text-[#CE1B1B]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass}`}
          >
            {status}
          </div>
        );
      },
    },
    { header: "Date Sent", accessor: "date", showSort: true },
    { header: "Projection", accessor: "projection", showSort: true },
  ];

  // const rowActions = (rowData) => (
  //   const isAwaiting = rowData.status === Awaiting
    
  //    const actions=[
  //       {
  //         label: "View",
  //         icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
  //         onClick: () => setAcceptPage(<AcceptedProposal setClose={setAcceptPage}/>),
  //       },
  //       {
  //         label: "Message",
  //         icon: <img src={MsgsSVG} alt="view" className="w-4 h-4" />,
  //         onClick: () => console.log("Message", rowData),
  //       },
  //       {
  //         label: "Download Contract",
  //         icon: <img src={DownloadSVG} alt="view" className="w-4 h-4" />,
  //         onClick: () => console.log("Download", rowData),
  //       },
  //     ]
  
  // );
  
    const rowActions = (rowData) => {
    const isAwaiting = rowData.status === "Awaiting";

    const actions = [
      {
        label: "View",
        icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
        onClick: () =>
          setAcceptPage(
            isAwaiting? (
              <AwaitingPropsal setClose={setAcceptPage} />
            ) : (
              <AcceptedProposal setClose={setAcceptPage} />
            )
          ),
      },
      {
          label: "Message",
          icon: <img src={MsgsSVG} alt="view" className="w-4 h-4" />,
          onClick: () => console.log("Message", rowData),
        },
        {
          label: "Download Contract",
          icon: <img src={DownloadSVG} alt="view" className="w-4 h-4" />,
          onClick: () => console.log("Download", rowData),
        },
    ];

  

    return <ActionMenu actions={actions} />;
  };


  return acceptPage ? (acceptPage) : (

    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white overflow-hidden">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
            Awaiting Proposals
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

        <Table
          columns={columns}
          data={filteredData} // UPDATED to use filteredData
          showActions
          actions={rowActions}
          search={search}
        />
      </div>
    </div>

  )
};

export default Proposalstable;
