import React, { useState } from "react";
import { BackarrowSVG, BlueeyeSVG, EyeSVG } from "../../constants/Icons";
import { UserPNG } from "../../constants/Imgs";
import Table from "../Table/Table";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Button/Button";

const ManuallyAsign = ({ setClose }) => {
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const allData = [
    {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      company: "Full service Type",
      location: "123 Palm Ave, Miami",
      active: "24"
    },
    {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      company: "Full service Type",
      location: "123 Palm Ave, Miami",
      active: "24"
    },
     {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      company: "Full service Type",
      location: "123 Palm Ave, Miami",
      active: "24"
    },
     {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      company: "Full service Type",
      location: "123 Palm Ave, Miami",
      active: "24"
    },
     {
      UserImg: UserPNG,
      reviews: "4.8 (125 reviews)",
      first_name: "StayWell Homes",
      company: "Full service Type",
      location: "123 Palm Ave, Miami",
      active: "24"
    },
  ];

  const columns = [
    {
      accessor: "property",
      header: "PM Company",
      showSort: true,
      cell: ({ row }) => {
        const {
          first_name = "Unknown",
          reviews = "No Email",
          UserImg = UserPNG,
        } = row;

        return (
          <div className="flex items-center gap-3">
            <img
              src={UserImg}
              alt={first_name}
              className="w-[38px] h-[38px] rounded-full object-cover border border-gray-200"
            />
            <div className="flex flex-col">
              <span className="font-medium text-sm text-[#252525] leading-tight mb-1">
                {first_name}
              </span>
              <span className="text-xs text-gray-500 leading-tight">
                {reviews}
              </span>
            </div>
          </div>
        );
      },
    },
    { header: "Location", accessor: "location", showSort: true },
    { header: "Company Type", accessor: "company", showSort: true },
    { header: "Active Property", accessor: "active", showSort: true },
  ];

  const rowActions = (rowData) => (
    <button className="flex items-center text-sm gap-1">
      <img src={EyeSVG} alt="view" className="w-4 h-4" />
      View Chat
    </button>
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <img
          src={BackarrowSVG}
          alt="Back"
          className="cursor-pointer"
          onClick={() => setClose(false)}
        />
        <h2 className="text-xl font-bold text-[#1B252B]">Assign PM</h2>
      </div>

      {/* Dropdown Toggle */}
      <div className="mb-4 border border-[#E4E5E8] rounded-[12px] p-5">
        <h3 className="text-sm font-bold text-[#181D27] mb-4">Select PM</h3>
        <button
          className="w-full flex justify-between items-center border border-gray-300 rounded px-4 py-2 bg-white mb-5"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-sm text-gray-700">View List </span>
          <span><IoIosArrowDown/></span>
        </button>
        {isDropdownOpen && (
          <div className="rounded-[12px] border border-[#E4E5E8] p-4 bg-white max-w-full overflow-x-auto mb-5">
            <div className="min-w-[700px]">
              <Table
                columns={columns}
                data={allData}
                showActions
                actions={rowActions}
                search={search}
              />
            </div>
          </div>
        )}
        <div className="flex justify-end"><Button variant={"defaultBtn"} className="!h-[44px]">Assign PM</Button></div>
      </div>
    </div>
  );
};

export default ManuallyAsign;
