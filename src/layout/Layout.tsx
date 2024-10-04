import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Header from "../static/Header";

const Layout = () => {
  return (
    <div>
      <div className="m-2 p-2 border rounded-lg min-h-[calc(100vh-416px)]">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
