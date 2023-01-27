import App from "../components/App";
import { NavigationProvider } from "../context/navigation";

const Home: React.FC = () => {
  return (
    <NavigationProvider>
      <App />
    </NavigationProvider>
  );
};

export default Home;
