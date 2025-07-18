

import React, { useState } from "react";
import ActionMenu from "../../DropDown/Dropdown";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

import Table from "../../Table/Table";
import {
  AllSVG,
  BellSVG,
  ClockSVG,
  DownloadSVG,
  EyeSVG,
  FilterSVG,
  ImportSVG,
  MsgsSVG,
  PaySVG,
  SmsSVG,
} from "../../../Constants/Icons";

import AdminInvoiceView from "./AdminInvoiceView/AdminInvoiceView";
import PaidInvoiceView from "./PaidInvoiceView/PaidInvoiceView";

const AdminInvoiceTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState(""); // NEW: filter state
  const [activePage, setActivePage] = useState(false);

  const allData = [
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Unpaid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Paid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Paid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Overdue",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Unpaid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Overdue",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Overdue",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Paid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Unpaid",
      date: "01-01-2025",
    },
    {
      id: "#INV-20-1012",
      property: "3BR Apartment",
      name: "Harry Gorge",
      amount: "$1899.09",
      status: "Paid",
      date: "01-01-2025",
    },
  ];

  // NEW: Filter the data based on selected status
  const filteredData = filterStatus
    ? allData.filter((item) => item.status === filterStatus)
    : allData;

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
    { header: "Date Sent", accessor: "date", showSort: true },
  ];

  //   const rowActions = (rowData) => {
  //     const isPaid = rowData.status === "Paid";

  //     const actions = [
  //       {
  //         label: "View",
  //         icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
  //         onClick: () =>
  //           setActivePage(
  //             isPaid ? (
  //               <PaidInvoice setClose={setActivePage} />
  //             ) : (
  //               <InvoiceView setClose={setActivePage} />
  //             )
  //           ),
  //       },
  //       {
  //         label: "Remind",
  //         icon: <img src={ImportSVG} alt="Remind" className="w-4 h-4" />,
  //         onClick: () => console.log("Remind", rowData),
  //       },
  //     ];

  //     if (isPaid) {
  //       actions.push({
  //         label: "Pay",
  //         icon: <img src={PaySVG} alt="Pay" className="w-4 h-4" />,
  //         onClick: () => setActivePage(<Pay setClose={setActivePage}/>),
  //       });
  //     }

  //     return <ActionMenu actions={actions} />;
  //   };

  const rowActions = (rowData) => {
    const isPaid = rowData.status === "Paid";
    const isUnpaid = rowData.status === "Unpaid";

    const actions = [];

    if (isPaid) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () =>
            setActivePage
                (
                <PaidInvoiceView setClose={setActivePage} />
              ) 
            
        },
        {
          label: "Download",
          icon: <img src={ImportSVG} alt="Download" className="w-4 h-4" />,
          onClick: () => console.log("Download", rowData),
        }
      );
    }

    if (isUnpaid) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () =>
            setActivePage(
               
                <AdminInvoiceView setClose={setActivePage} />
                
               
            ),
        },
        {
          label: "Remind",
          icon: <img src={BellSVG} alt="Remind" className="w-4 h-4" />,
          onClick: () => console.log("Remind", rowData),
        }
      );
    }

    return <ActionMenu actions={actions} />;
  };

  return (
    <>
      {activePage ? (
        activePage
      ) : (
        <div className="rounded-[12px]">
          <div className="rounded-xl bg-white overflow-hidden">
            <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
              <h2 className="text-xl text-[#181D27] font-bold">Invoices</h2>

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
                    value: "",
                    icon: <img src={AllSVG} alt="All" />,
                  },
                  {
                    label: "Unpaid",
                    value: "Unpaid",
                    icon: <img src={ClockSVG} alt="Awaiting" />,
                  },
                  {
                    label: "Paid",
                    value: "Paid",
                    icon: <img src={ClockSVG} alt="Accepted" />,
                  },
                  {
                    label: "Overdue",
                    value: "Overdue",
                    icon: <img src={ClockSVG} alt="Rejected" />,
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
              rowStyle="full-border"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminInvoiceTable;
