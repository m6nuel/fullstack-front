import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TemaType } from "../interfaces/interfaces";

export const useTemaApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useUserApp debe usarse dentro de un AppProvider");
  }

  const { initialState, setInitialState } = context;

  const addTema = (tema: TemaType) => {
    setInitialState({
      ...initialState,
      temas: [...(initialState.temas || []), tema] // Si temas es null, se convierte en un array vacío
    });
  };

  return { addTema };
};
