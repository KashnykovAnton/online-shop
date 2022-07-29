import { Outlet } from "react-router-dom";
import Announcement from "../Announcement";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
