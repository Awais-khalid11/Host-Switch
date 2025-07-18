// import React from 'react'

// const AcceptedViewTable = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AcceptedViewTable


import React, { useState } from "react";
import ActionMenu from "../../DropDown/Dropdown";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

import Table from "../../Table/Table";
import {
  AllSVG,
  ClockSVG,
  FilterSVG,
} from "../../../Constants/Icons";


const AcceptedViewTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState(""); // NEW: filter state

  const allData = [
    {
      id: "-",
      status: "-",
      amount: "-",
      date: "-",
      paid: "-"
    }
  ];

  // NEW: Filter the data based on selected status
  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

  const columns = [
    { header: "Invoice ID", accessor: "id", showSort: true },
    { header: "Status", accessor: "status", showSort: true },
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

export default AcceptedViewTable;
