import React from "react";
import { SearchSVG } from "../../constants/Icons";

const SearchField = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-[#EDEDED] bg-[#F9F9F9] h-10  p-4 min-w-[150px] lg:min-w-[300px] rounded-full outline-0 font-medium text-[14px] text-[#25252599]"
      />
      <div className="h-8 w-8  items-center justify-center rounded-full bg-[#F2F7F9] flex absolute  right-4 top-1/2 -translate-y-1/2">
        <img src={SearchSVG} alt="" />
      </div>
    </div>
  );
};
export default SearchField;
