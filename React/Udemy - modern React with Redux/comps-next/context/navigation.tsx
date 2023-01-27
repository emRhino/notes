import { createContext, useState, useEffect } from "react";

export interface NavigationType {
  navigate?: Function;
}

interface NavigationProviderTypes {
  children: React.ReactNode;
  value: NavigationType;
}

const NavigationContext = createContext<NavigationType | null>(null);

export const NavigationProvider: React.FC<NavigationProviderTypes> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(() => {
    () => {
      if (typeof window !== "undefined") {
        return window.location.pathname;
      }
    };
  });

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
