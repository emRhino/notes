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

const config = [{}];

const TablePage = () => {
  return <Table data={data} />;
};

export default TablePage;
