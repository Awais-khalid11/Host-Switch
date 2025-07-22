import React, { useState } from "react";
import Table from "../../Table/Table";
import ActionMenu from "../../DropDown/Dropdown";
import { useNavigate } from "react-router-dom";
import { UserPNG } from "../../../constants/Imgs";
import {
  AllSVG,
  ClockSVG,
  ConsiderSVG,
  EyeSVG,
  FilterSVG,
  MsgsSVG,
  ProfildeleteSVG,
  ProfiletickSVG,
} from "../../../constants/Icons";
import Button from "../../Button/Button";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import { ROUTES } from "../../../constants/Routes";

const HostProposalTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const allData = [
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Accepted",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Pending",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Received",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Pending",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Pending",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Accepted",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Declined",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Accepted",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Declined",
    },
    {
      property: "123 Palm Ave, Miami",
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      fee: "18%",
      revenue: "$42,000",
      date: "Apr 30, 2025",
      status: "Requested",
    },
  ];

  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    { header: "Property", accessor: "property", showSort: true },
    {
      accessor: "property",
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
    {
      header: "Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : status === "Declined"
            ? "bg-[#CE1B1B1A] border border-[#CE1B1B] text-[#CE1B1B]"
            : status === "Received"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : "bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass}`}
          >
            {status}
          </div>
        );
      },
    },
    { header: "Fee", accessor: "fee", showSort: true },
    { header: "Projected Revenue", accessor: "revenue", showSort: true },
    { header: "Date Received", accessor: "date", showSort: true },
  ];

  const rowActions = (rowData) => {
    const isPending = rowData.status === "Pending";
    const isAccepted = rowData.status === "Accepted";
    const isDeclined = rowData.status === "Declined";

    const actions = [];

    if (isPending) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(ROUTES.HOSTPROPOSALVIEW),
        },
        {
          label: "Accept",
          icon: <img src={ProfiletickSVG} alt="download" className="w-4 h-4" />,
          onClick: () => console.log("Accept", rowData),
        },
        {
          label: "Decline",
          icon: (
            <img src={ProfildeleteSVG} alt="download" className="w-4 h-4" />
          ),
          onClick: () => console.log("Decline", rowData),
        }
      );
    }

    if (isAccepted) {
      actions.push(
       {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(ROUTES.HOSTPROPOSALVIEW),
        },
        {
          label: "Message PM",
          icon: <img src={MsgsSVG} alt="Pay" className="w-4 h-4" />,
          onClick: () => navigate(ROUTES.PAY),
        }
      );
    }

    if (isDeclined) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(ROUTES.HOSTPROPOSALVIEW),
        },
        {
          label: "Reconsider",
          icon: <img src={ConsiderSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(isPaid ? ROUTES.PAIDINVOICE : ROUTES.UNPAID),
        }
      );
    }

    return <ActionMenu actions={actions} />;
  };

  return (
    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white overflow-hidden">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
            New Proposals
          </h2>

          <FilterDropdown
            button={
              <Button variant="filterbtn" suffixImg={FilterSVG}>
                Filter
              </Button>
            }
            onSelect={(val) => setFilterStatus(val)}
            options={[
              {
                label: "All", 
                value: "Pending", 
                icon: <img src={AllSVG} alt="All" />,
              },
              {
                label: "New", 
                value: "New", 
                icon: <img src={ClockSVG} alt="New" />,
              },
              {
                label: "Accepted",
                value: "Accepted",
                icon: <img src={ClockSVG} alt="Accepted" />,
              },
              {
                label: "Pending",
                value: "Pending",
                icon: <img src={ClockSVG} alt="Pending" />,
              },
              {
                label: "Rejected",
                value: "Rejected",
                icon: <img src={ClockSVG} alt="Rejected" />,
              },
              {
                label: "Requested",
                value: "Requested",
                icon: <img src={ProfiletickSVG} alt="Requested" />,
              },
            ]}
          />
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

export default HostProposalTable;
