import { createContext, ReactNode, useState } from "react";
import { AppContextType, InitState } from "../interfaces/interfaces";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialState, setInitialState] = useState<InitState>({ user: undefined, temas: [] });

  return <AppContext.Provider value={{ initialState, setInitialState }}>{children}</AppContext.Provider>;
};
