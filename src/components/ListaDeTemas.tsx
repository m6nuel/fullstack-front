import { useTemaApp } from "../hooks/useTemaApp";
import { Link } from "react-router-dom";

const ListaDeTemas = () => {
  const { initialState } = useTemaApp();
  const user = localStorage.getItem("user");

  // Filtrar temas para el usuario autenticado
  const temasUsuario = initialState.temas.filter((tema) => tema.userEmail === user);

  if (initialState.temas.length === 0) {
    return <p>Empieza a agregar temas! :)</p>;
  }

  if (!user) {
    // Mostrar todos los temas si no hay un usuario logueado
    return (
      <ul>
        {initialState.temas.map((tema) => (
          <li key={tema.id}>
            <Link to={`/createSubtema/${tema.id}`} className="text-blue-500 hover:text-blue-700">
              {tema.tema}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // Mostrar solo los temas del usuario logueado
  return (
    <ul>
      {temasUsuario.map((tema) => (
        <li key={tema.id}>
          <Link to={`/createSubtema/${tema.id}`} state={{ titulo: tema.tema}} className="text-blue-500 hover:text-blue-700">
            {tema.tema}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTemas;
