import { Outlet } from "react-router-dom";
// import LeftAside from "../../components/LeftAside";
// import CreateSubTema from "../../components/CreateSubTema";

const HomeLayout = () => {
  // const location = useLocation();

  // Verificar si la ruta actual es `/Home/creartema` o `/home/creartema/crearsubtema/:id`
  // const showLeftAside = location.pathname.startsWith("/Home/creartema");
  // const showCreateSubTema = location.pathname.startsWith("/home/creartema/crearsubtema");

  return (
    <>
      <main className="">
        <Outlet />
        {/* {showCreateSubTema && <CreateSubTema />} */}
      </main>
    </>
  );
};

export default HomeLayout;
