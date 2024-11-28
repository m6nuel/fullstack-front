import { createBrowserRouter } from "react-router-dom";
import Configuracion from "../components/Configuracion";
// import CreateSubTema from "../components/CreateSubTema";
import Home from "../components/Home";
import Perfil from "../components/Perfil";
import Posts from "../components/Posts";
import HomeLayout from "../pages/layouts/HomeLayout";
import RootLayout from "../pages/layouts/RootLayout";
// import LeftAside from "../components/LeftAside";
import MainCreate from "../components/MainCreate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home", // Ruta para el layout HomeLayout
        element: <HomeLayout />,
        children: [
          {
            index: true, // Ruta index dentro de HomeLayout
            element: <Home />,
          },
          {
            path: 'creartema',
            element: <MainCreate />
          },
          {
            path: "creartema/crearsubtema/:id",
            element: <MainCreate />,
          },
          {
            path: "creartema/crearsubtema/contenido/:id",
            element: <MainCreate />,
          },
        ],
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
      {
        path: "configuracion",
        element: <Configuracion />,
      },
    ],
  },
]);
