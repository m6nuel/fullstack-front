import { Outlet, useLocation } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
// import LeftAside from "../../components/LeftAside";
// import RigthAside from "../../components/RigthAside";
import LandingPage from "../../components/Landing";

const RootLayout = () => {
  const location = useLocation();

  // Rutas en las que los aside estarán ocultos
  const hideAsidePaths = ["/configuracion", "/perfil"];

  // Verificar si la ruta actual está en la lista de rutas que ocultan los asides
  const shouldHideAside = hideAsidePaths.includes(location.pathname);

  // Mostrar la landing page solo en la raíz
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {/* Header fijo */}
      <HeaderMain />

      {/* Contenedor principal con padding superior e inferior para header y footer */}
      <div className="flex flex-col min-h-min pt-16 pb-16">
        {isLandingPage ? (
          <div className="flex flex-1 items-center justify-center bg-gray-900 text-white">
            <LandingPage />
          </div>
        ) : (
          <div className="flex flex-1 text-white">
            {/* {!shouldHideAside && (
              <aside className="w-1/5 bg-gray-800 p-4 m-1 h-[calc(90vh-64px)] rounded-sm">
                <LeftAside />
              </aside>
            )} */}
            <main className={`${shouldHideAside ? "w-full" : "flex-1"}`}>
              <Outlet />
            </main>

            {/* {!shouldHideAside && (
              <aside className="w-1/5 bg-gray-800 p-4 m-1 h-[calc(90vh-64px)] rounded-sm">
                <RigthAside />
              </aside>
            )} */}
          </div>
        )}

        {/* Footer fijo */}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
