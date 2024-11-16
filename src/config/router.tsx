import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/RootLayout";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Perfil from "../components/Perfil";
import Configuracion from "../components/Configuracion";
import CreateSubTema from "../components/CreateSubTema";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/configuracion",
        element: <Configuracion />,
      },
      {
        path: "/createSubTema/:id", // Ruta dinámica para los temas
        element: <CreateSubTema />, // Componente que mostrará el detalle del tema
      },
    ],
  },
]);
