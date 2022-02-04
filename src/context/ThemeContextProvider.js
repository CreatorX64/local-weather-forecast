import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("neutral"); // "neutral", "cold", "warm"

  const themeContextState = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={themeContextState}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
