const LeftAside = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h4 className="text-center font-bold mb-4">Temas</h4>
      <form className="space-y-1">
        {/* <label htmlFor="tema" className="block text-sm font-medium">
          Agregar un tema
        </label> */}
        <input
          type="text"
          id="tema"
          placeholder="Agregar un tema"
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 mt-2 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
        >
          Crear Tema
        </button>
      </form>
    </div>
  );
};

export default LeftAside;
