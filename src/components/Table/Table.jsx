import React, { useState } from "react";
import Button from "../Button/Button";
import { NextSVG, PrevSVG } from "../../constants/Icons";
import Skeleton from "../Skeleton/SkeletonCard";

const Table = ({
  columns,
  data,
  onClick,
  showActions,
  actions,
  search = "",
  className,
  rowStyle = "bottom-border",
  showCheckbox = false,
  showPagination = true,
  rowsPerPage = 5,
  loading = false,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortingKey, setSortingKey] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPrev, setLoadingPrev] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };
  console.log(data, "nbh");
  const toggleAllRows = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      const allIds = paginatedData.map((row) => row.id);
      setSelectedRows(allIds);
    }
  };

  const handleClickFirstCell = (row) => {
    console.log("Clicked cell:", row);
  };

  const handleSort = (key) => {
    if (sortingKey === key) {
      setSortingOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortingKey(key);
      setSortingOrder("asc");
    }
  };

  const filteredData = data
    ?.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortingKey) return 0;
      const aVal = a[sortingKey];
      const bVal = b[sortingKey];
      if (aVal === bVal) return 0;
      return sortingOrder === "asc"
        ? aVal > bVal
          ? 1
          : -1
        : aVal < bVal
        ? 1
        : -1;
    });

  const paginatedData =
    rowStyle === "full-border"
      ? filteredData
      : filteredData?.slice(
          (currentPage - 1) * rowsPerPage,
          currentPage * rowsPerPage
        );

  const totalPages = Math.ceil(filteredData?.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setLoadingPrev(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setLoadingPrev(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setLoadingNext(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setLoadingNext(false);
      }, 300);
    }
  };
  return (
    <div className={`${className}`}>
      {loading ? (
        <Skeleton variant="table" count={1} rows={5} className="my-4 px-6" />
      ) : (
        <>
          <div
            className="w-full p-2.5"
            style={{ scrollbarColor: "#a0aec0 transparent" }}
          >
            <div className="relative md:w-full md:max-w-[800px] min-w-full sm:w-143 w-[100px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#F5F5F5]">
                  <tr
                    className={`${
                      rowStyle === "full-border"
                        ? "h-[34px] mb-2 border-b border-[#E9EAEB]"
                        : ""
                    }`}
                  >
                    {showCheckbox && (
                      <th className="py-2 px-4 text-[12px] font-bold text-black">
                        <input
                          type="checkbox"
                          checked={
                            selectedRows.length > 0 &&
                            selectedRows.length === paginatedData.length
                          }
                          onChange={toggleAllRows}
                        />
                      </th>
                    )}
                    {columns.map((col, index) => {
                      const isSortable = col.showSort;
                      const isSorted = sortingKey === col.accessor;
                      return (
                        <th
                          key={index}
                          className={`py-2 px-4 text-left text-[12px] font-bold text-black whitespace-nowrap ${
                            isSortable ? "cursor-pointer select-none" : ""
                          }`}
                          onClick={() => isSortable && handleSort(col.accessor)}
                        >
                          {col.header}
                          {isSortable && (
                            <span className="ml-1 text-xs">
                              {isSorted
                                ? sortingOrder === "asc"
                                  ? "▲"
                                  : "▼"
                                : "⇅"}
                            </span>
                          )}
                        </th>
                      );
                    })}
                    {showActions && (
                      <th className="py-2 px-6 text-left text-[12px] font-bold text-black">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData?.length > 0 ? (
                    paginatedData.map((row, rowIndex) => (
                      <React.Fragment key={row.id || rowIndex}>
                        {rowIndex !== 0 && rowStyle === "full-border" && (
                          <tr className="h-2" />
                        )}
                        <tr
                          className={`bg-white ${
                            rowStyle === "full-border"
                              ? "border border-[#E9EAEB] rounded-lg"
                              : "border-b border-[#E9EAEB]"
                          }`}
                        >
                          {showCheckbox && (
                            <td className="px-4">
                              <input
                                type="checkbox"
                                checked={selectedRows.includes(row.id)}
                                onChange={() => toggleRow(row.id)}
                              />
                            </td>
                          )}
                          {columns.map((col, colIndex) => {
                            const value = col.accessor
                              ? row[col.accessor]
                              : null;
                            return (
                              <td
                                key={colIndex}
                                className={`px-4 ${
                                  rowStyle === "full-border"
                                    ? "h-[36px]"
                                    : "h-[72px]"
                                } text-[12px] text-[#181D27] font-normal whitespace-nowrap ${
                                  colIndex === 1 ? "cursor-pointer" : ""
                                }`}
                                onClick={
                                  colIndex === 1
                                    ? () => {
                                        handleClickFirstCell(row);
                                        if (onClick)
                                          onClick(row, col, colIndex);
                                      }
                                    : undefined
                                }
                              >
                                {col.cell
                                  ? col.cell({ row, getValue: () => value })
                                  : col.render
                                  ? col.render(row)
                                  : value}
                              </td>
                            );
                          })}
                          {showActions && actions && (
                            <td
                              className={`px-6 ${
                                rowStyle === "full-border" ? "h-[36px]" : "py-4"
                              } text-[12px] text-[#181D27] font-normal`}
                            >
                              {actions(row)}
                            </td>
                          )}
                        </tr>
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={
                          columns.length +
                          (showCheckbox ? 1 : 0) +
                          (showActions ? 1 : 0)
                        }
                        className="text-center text-[#9CA3AF] text-sm py-6"
                      >
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {showPagination && rowStyle !== "full-border" && (
            <div className="flex justify-between items-center mt-2 px-2 border-t border-t-[#E9EAEB] pt-4">
              <h4 className="text-sm font-normal text-[#414651]">
                Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                {Math.min(currentPage * rowsPerPage, filteredData?.length)} of{" "}
                {filteredData?.length} Proposals
              </h4>
              <div className="flex items-center gap-2.5">
                <Button
                  onClick={handlePrevious}
                  disabled={currentPage === 1 || loadingPrev}
                  prefixImg={PrevSVG}
                  className={`font-bold text-sm text-[#A4A7AE] h-[36px] w-[109px] border border-[#E9EAEB] flex justify-center items-center ${
                    loadingPrev ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={currentPage === totalPages || loadingNext}
                  suffixImg={NextSVG}
                  className={`font-bold text-sm text-[#A4A7AE] h-[36px] w-[84px] border border-[#E9EAEB] flex justify-center items-center ${
                    loadingNext ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
