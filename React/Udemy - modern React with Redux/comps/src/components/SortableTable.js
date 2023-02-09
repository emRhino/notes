import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleClick = (label) => {
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        break;
      case "asc":
        setSortOrder("desc");
        break;
      default:
        setSortOrder(null);
        break;
    }

    console.log(sortOrder);
  };

  const { columns } = props;

  const updatedConfig = columns.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} sortable
        </th>
      ),
    };
  });

  return <Table {...props} columns={updatedConfig} />;
};

export default SortableTable;
