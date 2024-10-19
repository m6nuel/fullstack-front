import { User } from "firebase/auth";
import { useState } from "react";

const UserMenu = ({ user, handleLogout }: { user: User; handleLogout: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Círculo con la imagen del usuario */}
      <div
        className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-gray-300"
        onClick={toggleMenu}
      >
        <img
          src={user.photoURL || "https://via.placeholder.com/150"} // Imagen del usuario o un placeholder si no existe
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute bg-slate-400 right-0 mt-0 w-48 rounded-md shadow-lg z-20">
          <ul className="py-1">
            <li>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300 w-full text-left"
              >
                Logout
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300 w-full text-left">
                Mi perfil
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300 w-full text-left">
                Configuración
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
