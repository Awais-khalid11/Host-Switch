import React, { useState, useEffect } from "react";
import Table from "../../Table/Table";
import ActionMenu from "../../DropDown/Dropdown";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
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
import { getData, postData, putData } from "../../../api/apiClient";
import { ROUTES } from "../../../constants/Routes";
import { formatDate } from "../../../utils";

const HostProposalTable = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("");
  const [getProposalData, setGetProposalData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const response = await getData(`/proposal/?status=${filterStatus}`);
      setGetProposalData(response);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  async function updateProposal(id, status) {
    try {
      const payload = { status };
      await putData(`/proposal/${id}`, payload);
      fetchProposals();
    } catch (error) {
      console.error("API Error:", error);
    }
  }
  useEffect(() => {
    fetchProposals();
  }, [filterStatus]);

  const formattedData = getProposalData?.payload?.records?.map((doc) => ({
    id: doc?.id,
    property: doc?.property?.address || "N/A",
    first_name: doc?.user?.company_profile?.business_name || "N/A",
    reviews: doc?.property_owner_id || "N/A",
    company_logo: doc?.user?.company_profile?.company_logo,
    status: doc?.status || "N/A",
    fee: doc?.onboarding_fee || "N/A",
    revenue: doc?.revenue_expectation || "N/A",
    date: formatDate(doc?.created_at) || "N/A",
    original: doc,
    userId: doc?.user?.id,
  }));

  const columns = [
    { header: "Property", accessor: "property", showSort: true },
    {
      accessor: "first_name",
      header: "PM Company",
      showSort: true,
      cell: ({ row }) => {
        const {
          first_name = "Unknown",
          // reviews = "No Reviews",
          company_logo,
        } = row;
        console.log(`${import.meta.env.VITE_IMG_URL}${company_logo}`);
        return (
          <div className="flex items-center gap-3">
            {company_logo ? (
              <img
                src={`${import.meta.env.VITE_IMG_URL}${company_logo}`}
                alt={first_name}
                onError={(e) => (e.currentTarget.src = company_logo)}
                className="w-[38px] h-[38px] rounded-full object-cover border border-gray-200"
              />
            ) : (
              <div className="w-[38px] h-[38px] rounded-full bg-gray-200 flex items-center justify-center border border-gray-200">
                <FiUser className="text-gray-500 text-xl" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-medium text-sm text-[#252525] leading-tight mb-1">
                {first_name}
              </span>
              <span className="text-xs text-gray-500 leading-tight">
                4.8 (125 reviews)
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
          status === "Accepted" || status === "accepted"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : status === "Declined" || status === "declined"
            ? "bg-[#CE1B1B1A] border border-[#CE1B1B] text-[#CE1B1B]"
            : status === "Received" || status === "received"
            ? "bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]"
            : "bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F]";
        return (
          <div
            className={`px-3 py-1 text-xs font-medium rounded-full inline-block ${statusClass} capitalize`}
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

  const onSubmit = async (id) => {
    try {
      const formData = new FormData();
      formData.append("content", "Hi");
      formData.append("userIds[0]", id);

      await postData("chat", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate(ROUTES.HOSTMESSAGES);
    } catch (error) {
      console.error("Message send failed:", error);
    }
  };

  const rowActions = (rowData) => {
    const actions = [];
    const rowId = rowData?.id;
    const userId = rowData?.userId;

    if (rowData.status === "pending") {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(`${ROUTES.HOSTPROPOSALVIEW}/${rowId}`),
        },
        {
          label: "Accept",
          icon: <img src={ProfiletickSVG} alt="accept" className="w-4 h-4" />,
          onClick: () => updateProposal(rowData.id, "accepted"),
        },
        {
          label: "Decline",
          icon: <img src={ProfildeleteSVG} alt="decline" className="w-4 h-4" />,
          onClick: () => updateProposal(rowData.id, "declined"),
        }
      );
    } else if (
      rowData.status === "accepted" ||
      rowData.status === "withdrawn"
    ) {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(`${ROUTES.HOSTPROPOSALVIEW}/${rowId}`),
        },
        {
          label: "Message PM",
          icon: <img src={MsgsSVG} alt="message" className="w-4 h-4" />,
          onClick: () => onSubmit(userId),
        }
      );
    } else if (rowData.status === "declined") {
      actions.push(
        {
          label: "View",
          icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
          onClick: () => navigate(ROUTES.HOSTPROPOSALVIEW),
        },
        {
          label: "Reconsider",
          icon: <img src={ConsiderSVG} alt="reconsider" className="w-4 h-4" />,
          onClick: () => updateProposal(rowData.id, "accepted"),
        }
      );
    }

    return <ActionMenu actions={actions} />;
  };

  return (
    <div className="rounded-[12px]">
      <div className="rounded-xl bg-white overflow-visible relative">
        <div className="px-5 pt-[13px] flex items-center justify-between gap-2.5 flex-wrap lg:flex-nowrap">
          <h2 className="md:text-xl text-lg text-[#181D27] font-bold md:mb-3.5">
            New Proposal
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
                label: "Declined",
                value: "Declined",
                icon: <img src={ClockSVG} alt="Declined" />,
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
          data={formattedData}
          showActions
          actions={rowActions}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default HostProposalTable;
