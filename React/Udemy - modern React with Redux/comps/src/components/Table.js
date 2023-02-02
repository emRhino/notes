const Table = ({ data }) => {
  const tableRows = data.map((row) => {
    return (
      <tr key={row.index}>
        <td>{row.label}</td>
        <td>{row.color}</td>
        <td>{row.index}</td>
      </tr>
    );
  });
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Index</th>
      </tr>
      {tableRows}
    </table>
  );
};

export default Table;
