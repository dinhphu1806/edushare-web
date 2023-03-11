import React from "react";
import Routers from "../../routes/Routers";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import ModalSearh from "../ModalSearch/ModalSearh";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <Routers />
      <Footer />
      <BackToTop />
      {/* <ModalSearh /> */}
    </div>
  );
};

export default Layout;
