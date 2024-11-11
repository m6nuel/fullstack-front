import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth, useUser } from "reactfire";
import { useUserApp } from "../hooks/useUserApp";
import UserMenu from "./UserMenu";

const Login = () => {
  const { data: user } = useUser(); // Usuario autenticado actual de Firebase
  const auth = useAuth();
  // console.log(user)
  const { updateUser, user: userInContext, handleLogin, setInitialState, initialState } = useUserApp(); // Actualizar contexto del usuario
  // Sincronización inicial del estado del contexto con la sesión activa de Firebase
  useEffect(() => {
    const storeToken = async () => {
      if (user) {
        try {
          await handleLogin(user);
          const token = await user.getIdToken();
          const email = user.email;
          localStorage.setItem("authToken", token);
          localStorage.setItem("user", email ?? "");
        } catch (error) {
          console.error("no pudimos obtener el token", error);
        }
      }
    };
    if (user && (!userInContext || user.uid !== userInContext.uid)) {
      updateUser(user); // Actualiza el contexto si hay un usuario activo y es diferente al del contexto
    }
    storeToken();
  }, [user, userInContext, updateUser, handleLogin]);

  // Inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    if (user) {
      await handleLogin(user);
    }
    setInitialState({
      ...initialState,
      user: {
        email: user.email || "", // Agregar valor predeterminado si está indefinido
        displayName: user.displayName || "",
        uid: user.uid,
      },
    });
  };

  // Cierre de sesión
  const handleLogout = async () => {
    await signOut(auth);
    updateUser(null); // Limpia el contexto al cerrar sesión
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
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
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGoogleSignIn}>
      Login
    </button>
  );
};

export default Login;
