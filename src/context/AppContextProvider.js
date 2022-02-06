import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("neutral"); // "neutral", "cold", "warm"

  const appState = {
    theme,
    setTheme
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
