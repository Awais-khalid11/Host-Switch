import React, { useState, useEffect } from "react";
import Table from "../../Table/Table";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import { AllSVG, ClockSVG, FilterSVG } from "../../../constants/Icons";
import { getData } from "../../../api/apiClient";

const AdminDashboardTable = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [activityLogs, setActivityLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivityLogs = async () => {
    try {
      setLoading(true);
      const endpoint = filterStatus
        ? `/admin/dashboard/summary?status=${filterStatus}`
        : `/admin/dashboard/summary`;

      const data = await getData(endpoint);

      if (data?.payload?.recentActivityLogs?.records) {
        setActivityLogs(data.payload.recentActivityLogs.records);
      } else {
        setActivityLogs([]);
      }
    } catch (err) {
      console.error("Failed to fetch activity logs:", err);
      setActivityLogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivityLogs();
  }, [filterStatus]);

  const allData = activityLogs.map((item) => ({
    hosts: item?.property_owner?.name ?? "N/A",
    pms: item?.user?.name ?? "N/A",
    property: item?.property?.address ?? "N/A",
    proposals: item?.status
      ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
      : "N/A",
    status: item?.invoice_status ?? "Unpaid",
    score: item?.match_score ?? "—",
    commission: item?.revenue_expectation
      ? `$${item.revenue_expectation}`
      : "—",
  }));

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
          proposals.toLowerCase() === "accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : proposals.toLowerCase() === "pending"
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
            {filterStatus === "" ? "All" : filterStatus} Activity Logs
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
                value: "pending",
                icon: <img src={ClockSVG} alt="Awaiting" />,
              },
              {
                label: "Accepted",
                value: "accepted",
                icon: <img src={ClockSVG} alt="Accepted" />,
              },
              {
                label: "Rejected",
                value: "declined",
                icon: <img src={ClockSVG} alt="Rejected" />,
              },
              {
                label: "Withdrawn",
                value: "withdrawn",
                icon: <img src={ClockSVG} alt="Withdrawn" />,
              },
            ]}
          />
        </div>

        <div className="rounded-[12px] border border-[#001B4429] pb-2.5">
          <Table
            columns={columns}
            data={allData}
            search={search}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTable;
