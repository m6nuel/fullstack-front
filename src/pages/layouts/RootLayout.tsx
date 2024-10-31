import { Outlet, useLocation } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import LeftAside from "../../components/LeftAside";

const RootLayout = () => {
  const location = useLocation();

  // Definir rutas en las que los aside estarán ocultos
  const hideAsidePaths = ["/configuracion", "/perfil"];

  // Verificar si la ruta actual está en la lista de rutas que ocultan los asides
  const shouldHideAside = hideAsidePaths.includes(location.pathname);

  return (
    <>
      {/* Header fijo */}
      <HeaderMain />

      {/* Contenedor principal con padding superior e inferior para header y footer */}
      <div className="flex flex-col min-h-screen pt-16 pb-16">
        <div className="flex flex-1 text-white">
          {!shouldHideAside && (
            <aside className="w-1/5 bg-gray-800 p-4 m-1 h-[calc(90vh-64px)] rounded-sm">
              <LeftAside />
            </aside>
          )}

          <main className={`p-4 ${shouldHideAside ? "w-full" : "flex-1"}`}>
            <Outlet />
          </main>

          {!shouldHideAside && (
            <aside className="w-1/5 bg-gray-800 p-4 m-1 h-[calc(90vh-64px)] rounded-sm">
              <p className="text-center font-bold">Aside derecho</p>
            </aside>
          )}
        </div>

        {/* Footer fijo */}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
