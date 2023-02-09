import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const { columns, rows } = props;

  const handleClick = (label) => {
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      default:
        setSortOrder(null);
        break;
    }
  };

  let sortedData = rows;
  if (sortOrder && sortBy) {
    const { sortValue } = columns.find((column) => column.label === sortBy);

    sortedData = [...rows].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const updatedConfig = columns.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>{column.label}</th>
      ),
    };
  });

  return <Table {...props} rows={sortedData} columns={updatedConfig} />;
};

export default SortableTable;
