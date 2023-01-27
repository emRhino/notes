import { useContext } from "react";
import NavigationContext, { NavigationType } from "../../context/navigation";

const Link: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const { navigate } = useContext<NavigationType>(NavigationContext);

  const handleCLick = (e: React.MouseEvent) => {
    if (e.ctrlKey || e.metaKey) {
      return false;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleCLick}>
      {children}
    </a>
  );
};

export default Link;
