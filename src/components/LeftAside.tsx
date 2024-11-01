import ListaDeTemas from "./ListaDeTemas";
import FormularioDeTema from "./FormularioDeTema";

const LeftAside = () => {
  return (
    <div className="bg-gray-800 rounded-lg text-white">
      <h4 className="text-center font-bold mb-2">Temas</h4>
      <ListaDeTemas />
      <FormularioDeTema />
    </div>
  );
};

export default LeftAside;
