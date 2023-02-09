import Table from "./Table";
import SortableTable from "./SortableTable";

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
    sortValue: (fruit) => fruit.label,
  },
  {
    label: "Kolor",
    render: (fruit) => fruit.color,
  },
  {
    label: "index",
    render: (fruit) => fruit.index,
    sortValue: (fruit) => fruit.index,
  },
];

const TablePage = () => {
  return <SortableTable rows={data} columns={config} />;
};

export default TablePage;
