import { createContext, ReactNode, useEffect, useState } from "react";
import { AppContextType, InitState, TemaType } from "../interfaces/interfaces";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialState, setInitialState] = useState<InitState>({ user: undefined, temas: [] });

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tema");
        if (!response.ok) throw new Error("Error al cargar los temas");

        const temas: TemaType[] = await response.json();
        setInitialState((prev) => ({ ...prev, temas: [...prev.temas, ...temas] }));
      } catch (error) {
        console.error("Error al cargar los temas:", error);
      }
    };

    fetchTemas();
  }, []);

  return <AppContext.Provider value={{ initialState, setInitialState }}>{children}</AppContext.Provider>;
};
