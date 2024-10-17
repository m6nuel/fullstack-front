import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth, useUser } from "reactfire";

// import { useSigninCheck } from "reactfire";

const Sessions = () => {
  const { data: user } = useUser()
  // const { status, data } = useSigninCheck();
  // console.log(status, data)
  const getToken = async () => {
    const token = await user?.getIdToken()
    console.log(token) // user un estado global para almacenar el token
    return token
  }
  getToken()
  // console.log(user)
  const auth = useAuth();
  const handleGoogleSingIn = async () => {
    // console.log("click");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <>
      <div>Sessions</div>
      <button className="bg-blue-500 rounded px-4 py-2" onClick={handleGoogleSingIn}>
        singIn
      </button>
    </>
  );
};
export default Sessions;
