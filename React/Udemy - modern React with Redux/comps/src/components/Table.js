import { Fragment } from "react";

const Table = ({ rows, columns }) => {
  const renderHeader = columns.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const tableRows = rows.map((row) => {
    const tableCells = columns.map((column) => {
      return <td key={column.label}>{column.render(row)}</td>;
    });

    return <tr key={row.index}>{tableCells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{renderHeader}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
