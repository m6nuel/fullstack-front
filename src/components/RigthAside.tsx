
import { Link, useParams } from "react-router-dom";
import { useTemaApp } from "../hooks/useTemaApp";

const RigthAside = () => {
  const { id } = useParams();
  const { initialState } = useTemaApp();
  if (!id) {
    // console.error("ID no encontrado en la URL");
    // return <div>Error: ID no válido</div>;
    // Mostrar algo donde va el aside de subtemas
    return;
  }

  const temaId = parseInt(id, 10);
  if (isNaN(temaId)) {
    console.error("El ID proporcionado no es un número válido");
    return <div>Error: ID no válido</div>;
  }
  return (
    <aside className="p-4 m-1 h-[calc(90vh-64px)] rounded-sm">
      <div className="text-gray-800">
        <h2 className="text-xl font-bold mb-4">Subtemas: </h2>
        <ul className="max-w-96">
          {(() => {
            const tema = initialState.temas?.find((tema) => tema?.id === temaId);
            if (!tema || !tema.subtema || tema.subtema.length === 0) {
              // Si no hay tema o los subtemas están vacíos
              return <p className="text-gray-500">No hay subtemas disponibles.</p>;
            }
            return tema.subtema.map((subtema) => (
              <li key={subtema.id} className="bg-slate-800 my-2 p-2 rounded">
                <Link state={{ temaId, subtema }} to={`/home/creartema/crearsubtema/contenido/${subtema.id}`} className="text-gray-50 hover:text-gray-400">{subtema.subtema}</Link>
              </li>
            ));
          })()}
        </ul>
      </div>
    </aside>
  );
};
export default RigthAside;
