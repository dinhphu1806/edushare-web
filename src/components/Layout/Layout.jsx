import React from "react";
import Routers from "../../routes/Routers";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
