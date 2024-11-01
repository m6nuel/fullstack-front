import { useTemaApp } from "../hooks/useTemaApp";

const ListaDeTemas = () => {
  const { initialState } = useTemaApp();
  if (initialState.temas.length === 0) {
    return <p>Empieza a agregar temas! :)</p>;
  }
  console.log(initialState.temas);
  return (
    <ul>
      {initialState.temas.map((tema) => (
        <li key={tema.id}>{tema.tema}</li> // mas adelante sera un boton para agregar subtemas
      ))}
    </ul>
  );
};
export default ListaDeTemas;
