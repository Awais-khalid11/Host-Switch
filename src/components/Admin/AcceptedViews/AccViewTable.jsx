import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../Table/Table";

const AccViewTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState(""); // NEW: filter state

  const allData = [
    {
      id: "#INV-20-1012",
      status: "Paid",
      amount: "$1899.09",
      date: "12-02-2025",
      paid: "18-02-2025",
    },
  ];

  // NEW: Filter the data based on selected status
  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    { header: "Invoice ID", accessor: "id", showSort: true },
    {
      header: "Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Unpaid"
            ? "bg-[#FEF3C7]  text-[#92400E]"
            : status === "Paid"
            ? "bg-[#DCFCE7] text-[#166534]"
            : "bg-[#FEE2E2] text-[#991B1B]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass}`}
          >
            {status}
          </div>
        );
      },
    },
    { header: "Amount", accessor: "amount", showSort: true },
    { header: "Date Generated", accessor: "date", showSort: true },
    { header: "Paid On", accessor: "paid", showSort: true },
  ];

  return (
    <>
      <div className="rounded-[12px] border border-[#E4E5E8] p-5 mb-5">
        <h2 className="text-xl font-semibold pl-2.5">Invoicing Summary</h2>
        <div className="rounded-xl bg-white overflow-hidden">
          <Table
            columns={columns}
            data={filteredData}
            search={search}
            rowStyle="full-border"
          />
        </div>
      </div>
    </>
  );
};

export default AccViewTable;
