// src/hooks/useUserApp.ts
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import { User } from "firebase/auth";
import { UserApp } from '../interfaces/interfaces';

export const useUserApp = () => {
  const context = useContext(AppContext);

  // Verificación para asegurarse de que el contexto no sea undefined
  if (!context) {
    throw new Error("useUserApp debe usarse dentro de un AppProvider");
  }

  const { initialState, setInitialState } = context;

  const updateUser = (user: UserApp | null) => {
    // console.log("Actualizando usuario en el contexto a:", user);
    setInitialState(({
      ...initialState,
      user: user ? { email: user.email || null, displayName: user.displayName || null, uid: user.uid } : null, // Asigna el usuario o null si no está autenticado
    }));
  };

  return { updateUser, user: initialState.user }; // Devolvemos también el usuario actual si lo necesitas
};
