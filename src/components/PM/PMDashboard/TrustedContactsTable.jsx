import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Table from "../../Table/Table";
import Skeleton from "../../Skeleton/SkeletonCard";
import { getData } from "../../../api/apiClient";
import { formatDate } from "../../../utils";
import { EyeSVG, ImportSVG, PaySVG } from "../../../constants/Icons";
import ActionMenu from "../../DropDown/Dropdown";

const TrustedContactsTable = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(false);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      let url = "/payment/invoices";

      const response = await getData(url);

      const mappedData = response?.payload?.invoices?.map((inv) => ({
        id: inv.number,
        amount: `$${inv.amount_paid} ${inv.currency.toUpperCase()}`,
        status:
          inv.status === "paid"
            ? "Paid"
            : inv.status === "unpaid"
            ? "Draft"
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
  }, []);

  const columns = [
    { header: "Invoice ID", accessor: "id", showSort: true },
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

  const rowActions = (rowData) => {
    const isPaid = rowData.status === "Paid";

    const actions = [
      {
        label: "View",
        icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
        onClick: () =>
          setActivePage(
            rowData?.status === "PAID" || rowData?.status === "OVERDUE" ? (
              <PaidInvoice setClose={setActivePage} />
            ) : (
              <InvoiceView setClose={setActivePage} />
            )
          ),
      },
      {
        label: "Download",
        icon: <img src={ImportSVG} alt="download" className="w-4 h-4" />,
        onClick: () => console.log("Download", rowData),
      },
    ];

    if (isPaid) {
      actions.push({
        label: "Pay",
        icon: <img src={PaySVG} alt="Pay" className="w-4 h-4" />,
        onClick: () => setActivePage(<Pay setClose={setActivePage} />),
      });
    }

    return <ActionMenu actions={actions} />;
  };

  return (
    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white border border-[#E9EAEB]">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="text-xl text-[#181D27] font-bold">
            Invoices List View
          </h2>
        </div>

        {loading ? (
          <div className="p-5">
            <Skeleton variant="table" count={5} />
          </div>
        ) : (
          <Table
            columns={columns}
            data={data}
            showActions
            actions={rowActions}
            search={search}
            rowStyle="full-border"
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default TrustedContactsTable;
