import React from "react";
import Navbar from "../UI/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-[50px] md:px-[100px] px-[20px]">{children}</div>
    </div>
  );
};

export default RootLayout;
