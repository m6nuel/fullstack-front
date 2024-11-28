import ListaDeTemas from "./ListaDeTemas";
import FormularioDeTema from "./FormularioDeTema";
import { Link } from "react-router-dom";

const LeftAside = () => {
  const showCreateSubTema = location.pathname.startsWith("/home/creartema/crearsubtema");
  return (
    <>
      {showCreateSubTema ? (
        <Link to="/home/creartema">
          <button className="w-96 px-3 py-1.5 p-2 m-2 mr-1 rounded-md bg-blue-500 hover:bg-blue-600">Crear Tema</button>
        </Link>
      ) : (
        <FormularioDeTema />
      )}

      <h4 className="text-center font-bold mb-2 text-gray-800">Temas:</h4>
      <div className="h-[calc(80vh-64px)] overflow-y-scroll bg-gray-200 rounded scrollbar-hide ml-2">
        <div className="text-gray-500">
          <ListaDeTemas />
        </div>
      </div>
    </>
  );
};

export default LeftAside;
