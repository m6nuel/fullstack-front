import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SubTemaType, TemaType } from "../interfaces/interfaces";

export const useTemaApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTemaApp debe usarse dentro de un AppProvider");
  }

  const { initialState, setInitialState } = context;

  const addTema = async (tema: TemaType): Promise<string> => {
    try {
      // const token = await user?.getIdToken(); // Obtener el token del usuario
      const token = localStorage.getItem('authToken')
      const res = await fetch("http://localhost:3000/api/v1/tema", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluir el token en el header de Authorization
        },
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

  const addSubTema = async (subTema: SubTemaType, temaId: number) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error("No se encontró un token de autenticación");
      }
  
      const res = await fetch("http://localhost:3000/api/v1/subtema", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...subTema, temaId }),
      });
  
      if (!res.ok) {
        throw new Error("Error al agregar el subtema");
      }
  
      const addedSubTema: SubTemaType = await res.json();
  
      // Actualizar el estado del tema con el nuevo subtema
      setInitialState((prev) => {
        const updatedTemas = prev.temas.map((tema) => {
          if (tema.id === temaId) {
            return {
              ...tema,
              subtema: [...(tema.subtema ?? []), addedSubTema], // Asegurar que subtemas no sea undefined
            };
          }
          return tema;
        });
  
        return { ...prev, temas: updatedTemas };
      });
  
      return "Subtema agregado exitosamente";
    } catch (error) {
      console.error("Error al agregar el subtema:", error);
      return "Error al agregar el subtema";
    }
  };
  

  return { addTema, addSubTema, initialState, setInitialState };
};
