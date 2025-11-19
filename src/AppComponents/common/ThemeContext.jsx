import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};