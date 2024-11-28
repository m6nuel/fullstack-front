import { useParams } from "react-router-dom";

const Contenido = () => {
  const { id } = useParams();
  if (!id) {
    console.error("ID no encontrado en la URL");
    return <div>Error: ID no válido</div>;
  }

  const subTemaId = parseInt(id, 10);
  if (isNaN(subTemaId)) {
    console.error("El ID proporcionado no es un número válido");
    return <div>Error: ID no válido</div>;
  }
  return (
    <div>Contenido del subtema: {subTemaId}</div>
  )
}
export default Contenido