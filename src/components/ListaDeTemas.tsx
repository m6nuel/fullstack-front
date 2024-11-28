import { FaEdit, FaTrash } from "react-icons/fa";
import { useTemaApp } from "../hooks/useTemaApp";
import { Link } from "react-router-dom";
import { TemaType } from "../interfaces/interfaces";

const ListaDeTemas: React.FC = () => {
  const { initialState } = useTemaApp();
  const user = localStorage.getItem("user");

  // Filtrar temas para el usuario autenticado
  const temasUsuario = initialState.temas.filter((tema: TemaType) => tema.userEmail === user);

  // Manejar la edición
  const handleEdit = (tema: TemaType) => {
    console.log("Editar tema:", tema);
  };

  // Manejar la eliminación
  const handleDelete = (id: number) => {
    console.log("Eliminar tema con ID:", id);
  };

  if (initialState.temas.length === 0) {
    return <p className="text-gray-800">Empieza a agregar temas! :)</p>;
  }

  if (!user) {
    // Mostrar todos los temas si no hay un usuario logueado
    return (
      <ul className="max-w-96">
        {initialState.temas.map((tema: TemaType) => (
          <li className="bg-slate-800 my-2 p-2 rounded" key={tema.id}>
            <Link
              to={`/createSubtema/${tema.id}`}
              className="text-gray-50 hover:text-gray-400"
            >
              {tema.tema}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // Mostrar solo los temas del usuario logueado
  return (
    <ul className="max-w-96">
      {temasUsuario.map((tema: TemaType) => (
        <li
          className="bg-slate-800 my-2 p-2 rounded flex justify-between items-center"
          key={tema.id}
        >
          {/* Título del tema */}
          <Link
            to={`/home/creartema/crearsubtema/${tema.id}`}
            state={{ titulo: tema.tema }}
            className="text-gray-50 hover:text-gray-400 flex-1"
          >
            {tema.tema}
          </Link>

          {/* Iconos de editar y borrar */}
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(tema)}
              className="text-blue-500 hover:text-blue-400"
              aria-label="Editar"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => tema.id && handleDelete(tema.id)}
              className="text-red-500 hover:text-red-400"
              aria-label="Borrar"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTemas;
