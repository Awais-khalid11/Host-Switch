import React, { useState } from "react";
import Table from "../../Table/Table";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import { AllSVG, ClockSVG, FilterSVG } from "../../../constants/Icons";
import { useNavigate } from "react-router-dom";

const AdminDashboardTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const allData = [
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Accepted",
      status: "Paid",
      score: "90%",
      commission: "Paid",
    },
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Awaiting",
      status: "Unaid",
      score: "90%",
      commission: "Paid",
    },
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Rejected",
      status: "Paid",
      score: "90%",
      commission: "Paid",
    },
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Accepted",
      status: "Unpaid",
      score: "90%",
      commission: "Paid",
    },
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Accepted",
      status: "Paid",
      score: "90%",
      commission: "Paid",
    },
    {
      hosts: "Sarah Thompson",
      pms: "Sarah Thompson",
      property: "123 Palm Ave, Miami",
      proposals: "Accepted",
      status: "Paid",
      score: "90%",
      commission: "Paid",
    },
  ];

  const filteredData = filterStatus
    ? allData.filter((item) => item.proposals === filterStatus)
    : allData;

  const columns = [
    { header: "Hosts", accessor: "hosts", showSort: true },
    { header: "PM’s", accessor: "pms", showSort: true },
    { header: "Property Address", accessor: "property", showSort: true },
    {
      header: "Proposals",
      accessor: "proposals",
      showSort: true,
      cell: ({ getValue }) => {
        const proposals = getValue();

        const proposalsClass =
          proposals === "Accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : proposals === "Awaiting"
            ? "bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F]"
            : "bg-[#CE1B1B1A] border border-[#CE1B1B] text-[#CE1B1B]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${proposalsClass}`}
          >
            {proposals}
          </div>
        );
      },
    },
    { header: "Match Score", accessor: "score", showSort: true },
    {
      header: "Invoice Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Paid"
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
    { header: "Commission", accessor: "commission", showSort: true },
  ];

  return (
    <div>
      <div className="rounded-xl bg-white overflow-hidden">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 mb-3.5">
          <h2 className="md:text-xl text-base text-[#181D27] font-bold">
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

        <div className="rounded-[12px] border border-[#001B4429]">
          <Table
            columns={columns}
            data={filteredData} // UPDATED to use filteredData
            //   showActions
            //   actions={rowActions}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTable;
