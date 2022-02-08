import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const THEME_NEUTRAL = "neutral";
export const THEME_COLD = "cold";
export const THEME_WARM = "warm";

export default function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(THEME_NEUTRAL); // "neutral", "cold", "warm"

  const appState = {
    theme,
    setTheme
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
