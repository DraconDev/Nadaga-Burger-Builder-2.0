import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
// import classes from "./Layout.css";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

// console.log(classes);

const Layout = (props) => {
  return (
    <Auxiliary>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
