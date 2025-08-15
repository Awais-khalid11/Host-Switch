import React, { useState } from "react";
// import Table from "../Table/Table";
import ActionMenu from "../../DropDown/Dropdown";
import { HiDotsVertical } from "react-icons/hi";
import Table from "../../Table/Table";


const TrustedContactsTable = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Sarah Ali",
      amount: "$1899.09",
      status: "Paid",
      date: "12-02-2025",
    },
    {
      id: "#INV-20-1013",
      property: "2BR Condo",
      name: "Ahmed Khan",
      amount: "$1450.00",
      status: "Unpaid",
      date: "15-03-2025",
    },
    {
      id: "#INV-20-1014",
      property: "1BR Studio",
      name: "Ayesha Noor",
      amount: "$999.99",
      status: "Overdue",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1014",
      property: "1BR Studio",
      name: "Ayesha Noor",
      amount: "$999.99",
      status: "Paid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1014",
      property: "1BR Studio",
      name: "Ayesha Noor",
      amount: "$999.99",
      status: "Unpaid",
      date: "01-01-2025",
    },
  ];

  const columns = [
    { header: "Invoice ID", accessor: "id", showSort: true },
    { header: "Property", accessor: "property", showSort: true },
    { header: "Host Name", accessor: "name", showSort: true },
    { header: "Amount", accessor: "amount", showSort: true },
    {
      header: "Status",
      accessor: "status",
      showSort: true,
      cell: ({ getValue }) => {
        const status = getValue();

        const statusClass =
          status === "Paid"
            ? "bg-green-100 text-green-800"
            : status === "Unpaid"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass}`}
          >
            {status}
          </div>
        );
      },
    },
    { header: "Due Date", accessor: "date", showSort: true },
  ];


 const rowActions = () => (
  <HiDotsVertical className="text-xl text-gray-500 cursor-pointer" />
);


  return (
    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white border border-[#E9EAEB] ">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="text-xl text-[#181D27] font-bold">
            Invoices List View
          </h2>
        </div>

        <Table
          columns={columns}
          data={data}
          showActions
          actions={rowActions}
          search={search}
          rowStyle="full-border"
        />
      </div>
    </div>
  );
};

export default TrustedContactsTable;
