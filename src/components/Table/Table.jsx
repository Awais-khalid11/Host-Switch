import React, { useState } from "react";

const Table = ({
  columns,
  data,
  onClick,
  showActions,
  actions,
  search = "",
  className,
  rowStyle = "bottom-border", 
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortingKey, setSortingKey] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("asc");

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
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
    .filter((item) =>
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

  return (
    <div className={`${className}`}>
      <div
        className="w-full overflow-x-auto p-2.5"
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
              {filteredData.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
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
                    {columns.map((col, colIndex) => {
                      const value = col.accessor ? row[col.accessor] : null;
                      return (
                        <td
                          key={colIndex}
                          className={`px-4 ${
                            rowStyle === "full-border" ? "h-[36px]" : "h-[72px]"
                          } text-[12px] text-[#181D27] font-normal whitespace-nowrap ${
                            colIndex === 1 ? "cursor-pointer" : ""
                          }`}
                          onClick={
                            colIndex === 1
                              ? () => {
                                  handleClickFirstCell(row);
                                  if (onClick) onClick(row, col, colIndex);
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;