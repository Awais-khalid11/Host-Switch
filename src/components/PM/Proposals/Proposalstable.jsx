import React, { useEffect, useState } from "react";
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
import AcceptedProposal from "./AcceptedProposal/AcceptedProposal";
import AwaitingPropsal from "./AwaitingPropsal/AwaitingPropsal";
import RejectedPropsal from "./RejectedProposal/RejectedPropsal";
import { getData } from "../../../api/apiClient";
import { formatDate } from "../../../utils";

const Proposalstable = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [acceptPage, setAcceptPage] = useState(false);
  const [getProposalData, setGetProposalData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const response = await getData(`/proposal?status=${filterStatus}`);
      setGetProposalData(response);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProposals();
  }, [filterStatus]);

  const formattedData = getProposalData?.payload?.records?.map((doc) => ({
    id: doc?.id,
    property: doc?.property?.address || "N/A",
    first_name: doc?.property?.user?.name || "N/A",
    email: doc?.property?.user?.email || "N/A",
    reviews: doc?.property_owner_id || "N/A",
    UserImg: doc?.property?.user?.image,
    status: doc?.status || "N/A",
    fee: doc?.onboarding_fee || "N/A",
    projection: doc?.revenue_expectation || "N/A",
    date: formatDate(doc?.created_at) || "N/A",
    original: doc,
  }));

  const rowActions = (rowData) => {
    const status = rowData.status;
    const rowId = rowData.id;

    const commonViewAction = {
      label: "View",
      icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
      onClick: () =>
        setAcceptPage(
          <AwaitingPropsal
            status={status}
            id={rowId}
            setClose={setAcceptPage}
          />
        ),
    };

    const actions =
      status === "Awaiting"
        ? [
            commonViewAction,
            {
              label: "Message",
              icon: <img src={MsgsSVG} alt="msg" className="w-4 h-4" />,
              onClick: () => console.log("Message", rowData),
            },
            {
              label: "Withdraw",
              icon: <img src={SmsSVG} alt="withdraw" className="w-4 h-4" />,
              onClick: () => console.log("Withdraw", rowData),
            },
          ]
        : status === "Accepted"
        ? [
            commonViewAction,
            {
              label: "Message",
              icon: <img src={MsgsSVG} alt="msg" className="w-4 h-4" />,
              onClick: () => console.log("Message", rowData),
            },
            {
              label: "Download Contract",
              icon: (
                <img src={DownloadSVG} alt="download" className="w-4 h-4" />
              ),
              onClick: () => console.log("Download", rowData),
            },
          ]
        : [
            // Rejected
            commonViewAction,
            {
              label: "Send Feedback",
              icon: <img src={SmsSVG} alt="feedback" className="w-4 h-4" />,
              onClick: () => console.log("Send Feedback", rowData),
            },
          ];

    return <ActionMenu actions={actions} />;
  };
  const columns = [
    {
      accessor: "first_name",
      header: "Provider’s Name",
      showSort: true,
      cell: ({ row }) => {
        const { first_name = "Unknown", email = "No Email", UserImg } = row;

        return (
          <div className="flex items-center gap-3">
            <img
              src={
                UserImg ? `${import.meta.env.VITE_IMG_URL}${UserImg}` : UserPNG
              }
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
          status === "Awaiting" || status === "withdrawn"
            ? "bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F]"
            : status === "Accepted" || status === "accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : "bg-[#CE1B1B1A] border border-[#CE1B1B] text-[#CE1B1B]";

        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass} capitalize`}
          >
            {status}
          </div>
        );
      },
    },
    { header: "Date Sent", accessor: "date", showSort: true },
    {
      header: "Projection",
      accessor: "projection",
      showSort: true,
      cell: ({ getValue }) => (
        <span className="text-[#535862] font-bold">${getValue()}</span>
      ),
    },
  ];

  return acceptPage ? (
    acceptPage
  ) : (
    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
            {filterStatus === "" ? "Awaiting" : filterStatus} Proposals
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
          data={formattedData}
          showActions
          actions={rowActions}
          search={search}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Proposalstable;
