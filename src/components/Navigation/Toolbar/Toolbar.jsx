import React from "react";
import PropTypes from "prop-types";
import "./Toolbar.module.css";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import moduleName from "../SideDrawer/DrawerToggle/DrawerToggle";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.toggleSideDrawer} />
      {/* <div className="" onClick={props.toggleSideDrawer}>
        Menu
      </div> */}
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
