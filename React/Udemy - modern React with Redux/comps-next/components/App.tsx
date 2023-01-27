import Buttons from "./Buttons/Buttons";
import Accordion from "./Accordion/Accordion";
import Dropdown from "./Dropdown/Dropdown";

const options = [
  {
    name: "Yellow",
    color: "yellow",
  },
  {
    name: "Blue",
    color: "blue",
  },
  {
    name: "Red",
    color: "red",
  },
];

const App: React.FC = () => {
  return (
    <div className="p-6">
      <Dropdown data={options} />
      <Dropdown data={options} />
    </div>
  );
};

export default App;
