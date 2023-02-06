import Table from "./Table";

const data = [
  {
    label: "Banana",
    color: "yellow",
    index: 1,
  },
  {
    label: "Straberry",
    color: "red",
    index: 2,
  },
  {
    label: "Pinaple",
    color: "brown",
    index: 3,
  },
  {
    label: "Orange",
    color: "orange",
    index: 4,
  },
  {
    label: "Lime",
    color: "green",
    index: 5,
  },
];

const config = [
  {
    label: "Nazwa",
    render: (fruit) => fruit.label,
  },
  {
    label: "Kolor",
    render: (fruit) => fruit.color,
  },
  {
    label: "index",
    render: (fruit) => fruit.index,
    header: () => (
      <th className="with-arrows">
        <button>asd</button>
      </th>
    ),
  },
];

const TablePage = () => {
  return <Table rows={data} columns={config} />;
};

export default TablePage;
