const Card = ({ title, description1, codeOrImage, description2, isCode }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-shadow duration-300">
      {/* Título */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

      {/* Descripción 1 */}
      <p className="text-gray-600 mb-4">{description1}</p>

      {/* Código o Imagen */}
      <div
        className={`border ${
          isCode ? "bg-gray-100" : "bg-gray-200"
        } rounded-md p-4 mb-4 text-sm`}
      >
        {isCode ? (
          <pre className="overflow-x-auto whitespace-pre-wrap text-gray-800">
            <code>{codeOrImage}</code>
          </pre>
        ) : (
          <img
            src={codeOrImage}
            alt="imagen"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        )}
      </div>

      {/* Descripción 2 */}
      <p className="text-gray-600">{description2}</p>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Título de la tarjeta 1",
      description1: "Esta es una breve descripción de la tarjeta 1.",
      codeOrImage: "<div>Ejemplo de código</div>",
      description2: "Aquí hay más información sobre la tarjeta 1.",
      isCode: true,
    },
    {
      title: "Título de la tarjeta 2",
      description1: "Esta es una breve descripción de la tarjeta 2.",
      codeOrImage: "https://via.placeholder.com/400x200",
      description2: "Aquí hay más información sobre la tarjeta 2.",
      isCode: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
