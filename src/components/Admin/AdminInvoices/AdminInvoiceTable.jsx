import React, { useEffect, useState } from "react";
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
} from "../../../constants/Icons";

import AdminInvoiceView from "./AdminInvoiceView/AdminInvoiceView";
import PaidInvoiceView from "./PaidInvoiceView/PaidInvoiceView";
import { formatDate } from "../../../utils";
import { getData } from "../../../api/apiClient";

const AdminInvoiceTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [activePage, setActivePage] = useState(false);

  const [tab, setTab] = useState("leads");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      let url = "/payment/invoices";
      if (filterStatus) {
        const apiStatus =
          filterStatus === "paid"
            ? "paid"
            : filterStatus === "draft"
            ? "draft"
            : "";
        if (apiStatus) url += `?status=${apiStatus}`;
      }

      const response = await getData(url);

      const mappedData = response?.payload?.invoices?.map((inv) => ({
        id: inv.number,
        amount: `$${inv.amount_paid} ${inv.currency.toUpperCase()}`,
        name: inv?.user_info?.name,
        status:
          inv.status === "paid"
            ? "Paid"
            : inv.status === "unpaid"
            ? "Unpaid"
            : "Overdue",
        date: inv.paid_at ? formatDate(inv.paid_at) : "—",
      }));

      setData(mappedData);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [filterStatus, tab]);

  const columns = [
    { header: "Invoice ID", accessor: "id", showSort: true },
    { header: "User", accessor: "name", showSort: true },
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

  const rowActions = (rowData) => {
    if (tab === "registration") return null;

    const isPaid = rowData.status === "Paid";
    const isUnpaid = rowData.status === "Unpaid";

    const actions = [];

    if (isPaid) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () =>
            setActivePage(<PaidInvoiceView setClose={setActivePage} />),
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
            setActivePage(<AdminInvoiceView setClose={setActivePage} />),
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
          <div className="rounded-xl bg-white">
            <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
              <h2 className="text-xl text-[#181D27] font-bold">
                {tab === "registration"
                  ? "Registration Invoices"
                  : "Leads Invoices"}
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
                    value: "",
                    icon: <img src={AllSVG} alt="All" />,
                  },
                  {
                    label: "Unpaid",
                    value: "draft",
                    icon: <img src={ClockSVG} alt="Draft" />,
                  },
                  {
                    label: "Paid",
                    value: "paid",
                    icon: <img src={ClockSVG} alt="Paid" />,
                  },
                ]}
              />
            </div>
            <div className="flex mx-4 mb-3 gap-6  border-gray-200">
              <button
                onClick={() => setTab("registration")}
                className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  tab === "registration"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Registration Fee
              </button>
              <button
                onClick={() => setTab("leads")}
                className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  tab === "leads"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Leads Fee
              </button>
            </div>
            <Table
              columns={columns}
              data={data}
              // showActions={tab === "leads"}
              // actions={rowActions}
              search={search}
              rowStyle="full-border"
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminInvoiceTable;
