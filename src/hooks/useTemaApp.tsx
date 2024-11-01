import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TemaType } from "../interfaces/interfaces";

export const useTemaApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTemaApp debe usarse dentro de un AppProvider");
  }

  const { initialState, setInitialState } = context;

  const addTema = async (tema: TemaType): Promise<string> => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/tema", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tema),
      });

      if (!res.ok) {
        return "Error al agregar el tema";
      }

      const addedTema: TemaType = await res.json();

      // Actualizar el estado de temas
      setInitialState((prev) => ({
        ...prev,
        temas: [...prev.temas, addedTema]
      }));

      return "Tema agregado exitosamente";
    } catch (error) {
      console.error("Error al agregar el tema:", error);
      return "Error de red al agregar el tema";
    }
  };

  return { addTema, initialState, setInitialState };
};
