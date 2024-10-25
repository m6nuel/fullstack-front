import { AuthProvider } from "reactfire";
import { getAuth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";

function App() {
  const auth = getAuth();
  return (
    <AuthProvider sdk={auth}>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
