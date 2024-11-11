import { useTemaApp } from "../hooks/useTemaApp";

const ListaDeTemas = () => {
  const { initialState } = useTemaApp();
  const user = localStorage.getItem("user");
  const temasUsuario = initialState.temas.filter((tema) => tema.userEmail === user);

  if (initialState.temas.length === 0) {
    return <p>Empieza a agregar temas! :)</p>;
  }

  if (!user) {
    return (
      <ul>
        {initialState.temas.map((tema) => (
          <li key={tema.id}>{tema.tema}</li> // mas adelante sera un boton para agregar subtemas
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {temasUsuario.map((tema) => (
        <li key={tema.id}>{tema.tema}</li> // mas adelante sera un boton para agregar subtemas
      ))}
    </ul>
  );
};
export default ListaDeTemas;
