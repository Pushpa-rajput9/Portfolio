import { Outlet } from "react-router-dom";
import { Header, Footer, Home } from "./Component/Index";
function Layout() {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
