import React, { useState } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
// import classes from "./Layout.css";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// console.log(classes);

const Layout = (props) => {
  const [state, setState] = useState({ showSideDrawer: true });
  const sideDrawerCloserHandler = () => {
    // setState({ ...state, showSideDrawer: !state.showSideDrawer });
    setState((prevState) => {
      return { ...prevState, showSideDrawer: !prevState.showSideDrawer };
    });
  };
  return (
    <Auxiliary>
      <Toolbar toggleSideDrawer={sideDrawerCloserHandler} />
      <SideDrawer
        open={state.showSideDrawer}
        closed={sideDrawerCloserHandler}
      />
      <main className="Content">{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
