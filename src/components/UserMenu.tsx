import { User } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserMenu = ({ user, handleLogout }: { user: User; handleLogout: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConfg = () => {
    navigate("/configuracion");
    setIsMenuOpen(false);
  };

  const handlePerfil = () => {
    navigate("/perfil");
    setIsMenuOpen(false);
  };

  // Efecto para detectar clicks fuera del menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Círculo con la imagen del usuario */}
      <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-gray-300" onClick={toggleMenu}>
        <img
          src={user.photoURL || "https://via.placeholder.com/150"} // Imagen del usuario o un placeholder si no existe
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute bg-gray-700 right-0 mt-0 w-48 rounded-md shadow-lg z-20">
          <ul className="py-1">
            <li>
              <button onClick={handlePerfil} className="block px-4 py-2 text-sm hover:bg-slate-300 w-full text-left">
                <NavLink to="/perfil">Mi perfil</NavLink>
              </button>
            </li>
            <li>
              <button onClick={handleConfg} className="block px-4 py-2 text-sm hover:bg-slate-300 w-full text-left">
                <NavLink to="/configuracion">Configuración</NavLink>
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="block px-4 py-2 text-sm hover:bg-red-300 w-full text-left">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
