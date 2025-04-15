import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <main className="main-wrapper">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
