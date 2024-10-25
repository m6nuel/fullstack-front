import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth, useUser } from "reactfire";
import { useUserApp } from "../hooks/useUserApp";
import UserMenu from "./UserMenu";

const Login = () => {
  const { data: user } = useUser(); // Usuario autenticado actual de Firebase
  const auth = useAuth();
  const { updateUser, user: userInContext } = useUserApp(); // Actualizar contexto del usuario

  // Sincronización inicial del estado del contexto con la sesión activa de Firebase
  useEffect(() => {
    if (user && (!userInContext || user.uid !== userInContext.uid)) {
      console.log("Sincronizando usuario al contexto...");
      updateUser(user); // Actualiza el contexto si hay un usuario activo y es diferente al del contexto
    }
  }, [user, userInContext, updateUser]);
  

  // Inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user
    if (user) {
      // console.log("Sesión iniciada con:", result.user);
      updateUser(user); // Actualiza el contexto con el usuario recién autenticado
    }
    // setTimeout(() => {
    //   console.log("Sesión iniciada con:", result.user);
    //   updateUser(result.user); // Actualiza el contexto con la información del usuario
    // }, 0);
  };

  // Cierre de sesión
  const handleLogout = async () => {
    await signOut(auth);
    updateUser(null); // Limpia el contexto al cerrar sesión
  };

  // Renderizado basado en la autenticación del usuario
  if (user) {
    return (
      <>
        <p className="hidden md:block m-1">Hola, {user.displayName}</p>
        <UserMenu handleLogout={handleLogout} user={user} />
      </>
    );
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleGoogleSignIn}
    >
      Login
    </button>
  );
};

export default Login;
