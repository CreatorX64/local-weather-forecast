import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("neutral"); // "neutral", "cold", "warm"
  const [localCoords, setLocalCoords] = useState(null); // { lat: "", lon: "" }

  const appState = {
    theme,
    localCoords,
    setTheme,
    setLocalCoords
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
