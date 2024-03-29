import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Button from "./Button";
import PopupPage from "./PopupPage";
import TablePage from "./TablePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home router dom</div>,
  },
]);

function App() {
  return (
    <>
      <div>
        <div>
          <Button primary rounded>
            Hi there 1
          </Button>
        </div>
        <div>
          <Button rounded>Hi there 2</Button>
        </div>
        <div>
          <Button outline>Hi there 3</Button>
        </div>
        <div>
          <Button success outline>
            Hi there 4
          </Button>
        </div>
      </div>
      <PopupPage />
      <TablePage />
    </>
  );
}

export default App;
