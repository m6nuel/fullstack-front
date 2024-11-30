
import Contenido from "./Contenido";
import CreateSubTema from "./CreateSubTema";
import LeftAside from "./LeftAside";
import RigthAside from "./RigthAside";

const MainCreate = () => {
  const showCreateSubTema = location.pathname.startsWith("/home/creartema/crearsubtema");
  const showContenido = location.pathname.startsWith("/home/creartema/crearsubtema/contenido");

  return (
    <div className="flex h-[calc(90vh-64px)]">
      {/* LeftAside: Ocupa un ancho fijo a la izquierda */}
      <div className="w-1/4 bg-gray-200">
        <LeftAside />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-400">
        {showCreateSubTema && !showContenido && <CreateSubTema />}
        {showContenido && <Contenido />}
        {!showCreateSubTema && !showContenido && (
          <span className="text-black">Crea un tema</span>
        )}
      </div>

      {/* RightAside: Ocupa un ancho fijo a la derecha, se oculta si showContenido es true */}
      {!showContenido && (
        <div className="w-1/4 bg-gray-200">
          <aside>
            <RigthAside />
          </aside>
        </div>
      )}
    </div>
  );
};

export default MainCreate;

// import Contenido from "./Contenido";
// import CreateSubTema from "./CreateSubTema";
// import LeftAside from "./LeftAside";
// import RigthAside from "./RigthAside";

// const MainCreate = () => {
//   const showCreateSubTema = location.pathname.startsWith("/home/creartema/crearsubtema");
//   const showContenido = location.pathname.startsWith("/home/creartema/crearsubtema/contenido");

//   return (
//     <div className="flex h-[calc(90vh-64px)]">
//       {/* LeftAside: Ocupa un ancho fijo a la izquierda */}
//       <div className="w-1/4 bg-gray-200">
//         <LeftAside />
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-4 bg-gray-400">
//         {showCreateSubTema && !showContenido && <CreateSubTema />}
//         {showContenido && <Contenido />}
//         {!showCreateSubTema && !showContenido && (
//           <span className="text-black">Crea un tema</span>
//         )}
//       </div>

//       {/* RightAside: Ocupa un ancho fijo a la derecha */}
//       <div className="w-1/4 bg-gray-200">
//         <aside>
//           <RigthAside />
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default MainCreate;
