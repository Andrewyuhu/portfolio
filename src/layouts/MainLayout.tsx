import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <main className="main-wrapper">{children}</main>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
