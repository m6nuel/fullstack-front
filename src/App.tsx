import { AuthProvider } from "reactfire";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth()
  return (
    <AuthProvider sdk={auth}>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-blue-500">¡Hola Tailwind!</h1>
      </div>
    </AuthProvider>
  );
}

export default App;
