import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-6 md:px-8 px-10">{children}</div>
    <Footer></Footer>
    </div>
  );
};

export default RootLayout;
