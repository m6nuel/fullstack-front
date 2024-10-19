import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";

const RootLayout = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
};
export default RootLayout;
