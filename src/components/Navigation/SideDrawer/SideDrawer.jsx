import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const SideDrawer = (props) => {
  const attachedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ].join(" ");
  // console.log("SideDrawer", attachedClasses);
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

SideDrawer.propTypes = {};

export default SideDrawer;
