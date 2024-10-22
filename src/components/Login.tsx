import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth, useUser } from "reactfire";
import UserMenu from "./UserMenu";

// import { useSigninCheck } from "reactfire";

const Login = () => {
  const { data: user } = useUser();
  // const { status, data } = useSigninCheck();
  // console.log(status, data)
  const getToken = async () => {
    const token = await user?.getIdToken();
    // console.log(token); // user un estado global para almacenar el token
    return token;
  };
  getToken();

  const auth = useAuth();

  const handleGoogleSingIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  console.log(user);
  if (user?.isAnonymous === false) {
    return (
      <>
        <p className="hidden md:block m-1">hola, {user.displayName}</p>
        <UserMenu handleLogout={handleLogout} user={user} />
      </>
    );
  }
  return (
    <button
      // className="block px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-2"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleGoogleSingIn}
    >
      Login
    </button>
  );
};
export default Login;
