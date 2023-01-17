import Button from "./Button";
import { BsFillAlarmFill } from "react-icons/bs";

const App: React.FC = () => {
  const handleClick = (): void => {
    console.log("asd");
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick} success round>
          <BsFillAlarmFill className="mr-1" />
          Hey me
        </Button>
      </div>
      <div>
        <Button outline>Order now!</Button>
      </div>
      <div>
        <Button secondary round>
          Sold out
        </Button>
      </div>
      <div>
        <Button round>Hey there</Button>
      </div>
    </div>
  );
};

export default App;
