import React from "react";
import "./Layout.css";

/* Main conatiner with the childrens */

const Layout = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
