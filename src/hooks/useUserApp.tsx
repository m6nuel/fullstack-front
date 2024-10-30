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
    const us = user ? { email: user.email || null, displayName: user.displayName || null, uid: user.uid } : undefined
    setInitialState(({
      ...initialState,
      user: us, // Asigna el usuario o null si no está autenticado
    }));
    return initialState;
  };

  const handleLogin = async (user: UserApp) => {
    const url = 'http://localhost:3000/api/v1/user'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: user.email})
      })

      if (!response.ok) {
        throw new Error('Credenciales incorrectas o error en el servidor');
      }

      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return { updateUser, user: initialState.user, handleLogin, setInitialState, initialState }; // Devolvemos también el usuario actual si lo necesitas
};
