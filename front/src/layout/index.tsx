import Navbar from "../components/navbar/bar";
import Footer from "../components/footer";
import { ReactNode } from "react";

/** */
interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
