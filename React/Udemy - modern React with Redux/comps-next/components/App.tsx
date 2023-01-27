import Route from "./Route/Route";
import Link from "./Link/Link";
import Accordion from "./Accordion/Accordion";
import Buttons from "./Buttons/Buttons";
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
      <Link to="/accordion">Accordion</Link>
      <Link to="/buttons">Buttons</Link>
      <Link to="/dropdown">Dropdown</Link>
      <Route path="/accordion">
        <Accordion />
      </Route>
      <Route path="/dropdown">
        <Dropdown data={options} />
      </Route>
      <Route path="/buttons">
        <Buttons />
      </Route>
    </div>
  );
};

export default App;
