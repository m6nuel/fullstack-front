import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";

const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLandingPage = location.pathname === "/";

  return (
    <div className="bg-gray-800 text-white fixed top-0 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              MyLogo
            </Link>
          </div>

          {/* Rutas centradas */}
          {isLandingPage ? (
            <p>Inicia session para crear tutoriales</p>
          ) : (
            <div className="hidden md:flex justify-center flex-1 space-x-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-blue-300")}>
                Home
              </NavLink>
              <NavLink to="/posts" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-blue-300")}>
                Crear Posts
              </NavLink>
            </div>
          )}

          {/* Botón de login en la derecha */}
          <div className="hidden md:flex items-center">
            <Login />
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable para móviles */}
        {isOpen && (
          <div className="md:hidden ml-auto text-right">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "block px-2 py-2 text-blue-400" : "block px-2 py-2 hover:text-blue-300")}
            >
              Home
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "block px-2 py-2 text-blue-400" : "block px-2 py-2 hover:text-blue-300")}
            >
              Crear Posts
            </NavLink>
            <div className="block px-2 py-2">
              <Login />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HeaderMain;
